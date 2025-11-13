const { uploadToCloudinary, deleteCloudinaryMedia } = require("../utils/cloudinary");
const Post = require("../models/post-model");
const UserData = require("../models/userdata-model");


const addpost = async (req, res) => {
    try {
        const { userId, content } = req.body;

        let media = [];

        if (req.files["video"]) {
            const videoUpload = await uploadToCloudinary(req.files["video"][0].path,
                "uploads", "video");
            media.push({ type: "video", url: videoUpload });
            console.log(videoUpload);

        }
        if (req.files["images"]) {
            for (const image of req.files["images"]) {
                const imageUpload = await uploadToCloudinary(image.path,
                    "uploads", "image");
                media.push({ type: "image", url: imageUpload });
                console.log(imageUpload);

            }
        }
        console.log(media);

        const newPost = new Post({
            userId: userId,
            content: content || "",
            media: media,
        });

        await newPost.save();

        res.status(201).json({ message: "Post created successfully", })
    } catch (error) {
        console.log("error form post", error);
        res.status(500).json({ message: "Internal Server Error" })

    }
}

const sendposts = async (req, res) => {
    try {
        const posts = await Post.find().populate({
            path: "userId",
            model: "UserData",  // ✅ Populate from UserData model
            select: "username pimage"
        }).populate({
            path: "comments._id",
            model: "UserData",  // ✅ Populate from UserData model
            select: "username pimage"
        });
        // console.log(posts);

        res.status(200).json({ posts });
    } catch (error) {
        res.status(500).json("Post not finds")
        console.log(error);


    }
}


const sendallposts = async (req, res) => {
    try {
        const { userID } = req.params;
        // console.log(userID);
        const user = await UserData.findById(userID).select("following");
        const followingId = user.following.map(f => f._id);
        if (!followingId) {
            res.status(500).json({ message: "userdata not found" });
        }

        const followingPost = await Post.find({ userId: { $in: followingId || [] } }).sort({ createdAt: -1 }).populate({
            path: "userId",
            model: "UserData",  // ✅ Populate from UserData model
            select: "username pimage"
        }).populate({
            path: "comments._id",
            model: "UserData",  // ✅ Populate from UserData model
            select: "username pimage"
        });
        const randomPost = await Post.find({ userId: { $nin: followingId || "" } }).sort({ createdAt: -1 }).populate({
            path: "userId",
            model: "UserData",  // ✅ Populate from UserData model
            select: "username pimage"
        }).populate({
            path: "comments._id",
            model: "UserData",  // ✅ Populate from UserData model
            select: "username pimage"
        });

        res.status(200).json([...followingPost, ...randomPost]);
    } catch (error) {
        res.status(500).json("Post not getted")
        console.log("allusers", error);
    }
}

const addMore = async (req, res) => {
    try {
        const { comment, commentId, likedId } = req.body;
        const { userID } = req.params;

        const post = await Post.findById(userID);
        const alredylike = post.likes.some(like => like._id.toString() === likedId);

        if (commentId) {
            post.comments.push({
                _id: commentId,
                comment: comment,
                commentAt: new Date(),
            });
            await post.save();
            res.status(200).json({ message: "Comment send sucessfully" });
        }

        if (likedId) {
            if (alredylike) {
                post.likes = post.likes.filter(f => f._id.toString() !== likedId);
                await post.save();
                res.status(200).json({ message: "Disliked this post" });
            } else {

                post.likes.push({
                    _id: likedId
                });
                await post.save();
                res.status(200).json({ message: "Liked this post" });
            }
        }


    } catch (error) {
        res.status(500).json({ message: "Error from backend" });
        console.log(error);

    }
}

const postdelete = async (req, res) => {
    try {
        const { postID } = req.params;

        const postDelete = await Post.findById(postID);
        if (postDelete.deletedCount === 0) {
            return res.status(404).json({ message: "Post not found" });

        }
        for (const media of postDelete.media) {
            if (media.url.includes("cloudinary")) {
                await deleteCloudinaryMedia(media.url);
            }
        }
        await Post.findByIdAndDelete(postID);
        res.status(200).json({ message: "Post deleted successfully" });
    } catch (error) {
        console.error("Error deleting post:", error);
        res.status(500).json({ message: "Server error" });
    }
}

module.exports = { addpost, sendposts, sendallposts, addMore, postdelete }