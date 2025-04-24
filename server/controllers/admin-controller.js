const Post = require("../models/post-model");
const User = require("../models/user-model");
const UserData = require("../models/userdata-model");

const userdelete = async (req, res) => {
    try {
        const { userID } = req.params;

        // Find and delete the user
        const deletedUser = await User.findByIdAndDelete(userID);
        const deletedUserdata = await UserData.findById(userID);
        const deletedUserpost = await Post.findById(userID);
        if (!deletedUser) {
            return res.status(404).json({ message: "User not found" });
        }
        if (deletedUserdata) {
            await UserData.findByIdAndDelete(userID);        
        }
        if(deletedUserpost){
            
            await Post.findByIdAndDelete(userID);
        } 


        res.status(200).json({ message: "User deleted successfully" });
    } catch (error) {
        console.error("Error deleting user:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
}

module.exports = { userdelete }