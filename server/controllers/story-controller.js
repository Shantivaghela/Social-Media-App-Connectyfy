const Story = require("../models/story-model");
const UserData = require("../models/userdata-model");


const storyadd = async (req, res) => {
    try {
        const { userId, content } = req.body;
        const files = req.files;
        if (!files || files.length === 0) {
            return res.status(400).json({ message: "No media uploaded" });
        }
        const mediaData = files.map(file => ({
            type: file.mimetype.startsWith("video") ? "video" : "image",
            url: file.path,
            public_id: file.filename,
        }));

        const newStory = new Story({
            userId: userId, 
            media: mediaData, 
            content:content });
        await newStory.save();
        res.status(201).json({ message: "Story uploaded successfully", story: newStory });

    } catch (error) {
        console.error("❌ Error uploading story:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}


const getstorys = async(req,res) =>{
    try {
        const stories = await Story.find().populate({
            path: "userId",  
            model: "UserData",  // ✅ Populate from UserData model
            select: "username pimage"
        })

        res.status(201).json({stories})
    } catch (error) {
        res.status(500).json({message:"story not found"});
            console.log(error);
            
    }
}

module.exports = { storyadd,getstorys}