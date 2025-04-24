const UserData = require("../models/userdata-model");
const User = require("../models/user-model");
const user = require("../controllers/auth-controller")
const fs = require("fs");;
const path = require("path");

const userdata = async (req, res) => {
    try {
        const { _id, username, email, gender, description } = req.body;
        const userExists = await UserData.findOne({ email })

        if (userExists) {
            return res.status(400).json({ message: "email already exists" });
        }
        const profileDetails = new UserData({
            _id,
            username,
            email,
            gender,
            description,
            pimage: req.files["pimage"] ? "/images/" + req.files["pimage"][0].filename : "",
            bimage: req.files["bimage"] ? "/images/" + req.files["bimage"][0].filename : "",
            followers: [],
            following: [],
        });
        await profileDetails.save();


        res.status(201).json({ message: "Profile created successfully", profile: profileDetails });
    } catch (error) {
        // console.log(error);
        res.status(400).json({ msg: "page not found" })

    }
}

const addfollow = async (req, res) => {
    try {
        const { userId, username, email, conformId } = req.body;
        const { userID } = req.params;
        console.log(req.body);

        console.log(userID);





        // if (!userId || !userID || conformId) {
        //     return res.status(400).json({ message: "Invalid user ID" });
        // }

        const userdata = await User.findById(userId);
        let currentUser = await UserData.findById(userID);
        let followedUser = await UserData.findById(userId);



        if (!currentUser) {
            currentUser = new UserData({
                _id: userID,
                username: username,
                email: email,
                followers: [],
                following: [],
                requests: [],
            });

            await currentUser.save();
        }
        if (!followedUser) {
            followedUser = new UserData({
                _id: userId,
                username: userdata.username,
                email: userdata.email,
                followers: [],
                following: [],
                requests: [],
            });

            await followedUser.save();
        }
        const alreadyFollowing = currentUser.following.some(f => f._id.toString() === userId);
        if (alreadyFollowing) {
            return res.status(400).json({ message: "Already following this user" });
        }


        currentUser.following.push({ _id: userId });
        await currentUser.save();

        followedUser.requests.push({ _id: userID });
        await followedUser.save();



        res.status(200).json({ message: "Your now following " });
    } catch (error) {
        res.status(500).json({ message: "Error following user", error });
        console.log(error);

    }
}


const conformreq = async (req, res) => {
    try {
        const { conformId } = req.body;
        const { userID } = req.params;

        const user = await UserData.findById(userID);

        user.followers.push({ _id: conformId });
        user.requests = user.requests.filter(f => f._id.toString() !== conformId);
        await user.save();


        res.status(200).json({ message: "Your now following " });
    } catch (error) {
        res.status(500).json({ message: "Error following user", error });
        console.log(error);
    }
}


const unfollow = async (req, res) => {

    try {
        const { unfollowid, conformId } = req.body;
        // console.log(req.body);

        const { userID } = req.params;

        if (userID === unfollowid) {
            return res.status(400).json({ message: "You cannot unfollow yourself" });
        }

        const user = await UserData.findById(userID);
        const unFuser = await UserData.findById(unfollowid);

        if (!user || !unfollowid) {
            return res.status(404).json({ message: "User data not found" });
        }

        user.following = user.following.filter(f => f._id.toString() !== unfollowid);
        user.requests = user.requests.filter(f => f._id.toString() !== unfollowid);
        await user.save();


        unFuser.followers = unFuser.followers.filter(f => f._id.toString() !== userID);
        unFuser.following = unFuser.following.filter(f => f._id.toString() !== userID);
        await unFuser.save();

        res.status(200).json({ message: "Unfollowed successfully" });

    } catch (error) {
        res.status(500).json({ message: "Error unfollowing user", error });
    }
}




const getuserdata = async (req, res) => {
    try {


        const { userID } = req.params;
        // const userID = "67c5377116637cce8c11bffa";
        // console.log(userID);

        const userdata = await UserData.findById(userID);

        if (!userdata) {
            console.log("userdata not get");

        }

        res.status(200).json({ userdata })
        // console.log(userdata);

    } catch (error) {

        console.log("Not more data of user...");
        console.log(error);
        


    }
}

const updateprofile = async (req, res) => {
    try {
        const { username, email, gender, description, userId } = req.body;


        const { userID } = req.params;
        const updateData = await UserData.findById(userID);
        const getUser = await User.findById(userID);
        // console.log("get userdata",getUser);
        // console.log(username);



        if (username !== updateData.username) updateData.username = username;
        if (email !== updateData.email) updateData.email = email;
        if (gender !== updateData.gender) updateData.gender = gender;
        if (description !== updateData.description) updateData.description = description;
        if (userId !== updateData.following.userId) updateData.following.userId = userId;

        if (username !== getUser.username) getUser.username = username;
        if (email !== getUser.email) getUser.email = email;
        if (req.files["bimage"]) {
            if (updateData.bimage) {
                const oldPath = path.join(__dirname, "../public", updateData.bimage);
                if (fs.existsSync(oldPath)) {
                    fs.unlinkSync(oldPath);
                }
            }
            updateData.bimage = `/images/${req.files["bimage"][0].filename}`;
        }
        if (req.files["pimage"]) {
            if (updateData.pimage) {
                const oldPath = path.join(__dirname, "../public", updateData.pimage);
                if (fs.existsSync(oldPath)) {
                    fs.unlinkSync(oldPath); // ✅ Remove old image
                }
            }
            updateData.pimage = `/images/${req.files["pimage"][0].filename}`;
        }


        await updateData.save();
        await getUser.save();
        res.json({ message: "Profile updated successfully", updateData });

    } catch (error) {

        console.log("profile not updated ", error);


    }
}

const getAllusers = async (req, res) => {
    try {
        const getAlldata = await UserData.find();
        res.status(200).json({ getAlldata });
        console.log(getAlldata);

    } catch (error) {
        console.log("user more data not found", error);

    }
}



module.exports = { userdata, getuserdata, updateprofile, getAllusers, addfollow, unfollow, conformreq };