const UserData = require("../models/userdata-model");
const User = require("../models/user-model");
const user = require("../controllers/auth-controller")
const fs = require("fs");;
const path = require("path");

const userdata = async (req, res) => {
    try {
        // const data = req.body;
        const { _id, username, email, gender, description } = req.body;
        // console.log(req.files);
        const profileDetails = new UserData({
            _id,
            username,
            email,
            gender,
            description,
            pimage: req.files["pimage"] ? "/images/" + req.files["pimage"][0].filename : "",
            bimage: req.files["bimage"] ? "/images/" + req.files["bimage"][0].filename : ""
        });
        await profileDetails.save();


        res.status(201).json({ message: "Profile created successfully", profile: profileDetails });
    } catch (error) {
        // console.log(error);
        res.status(400).json({ msg: "page not found" })

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
        console.log(userdata);
        
        res.status(200).json({ userdata })
    } catch (error) {

        console.log("Not more data of user");


    }
}

const updateprofile = async (req, res) => {
    try {
        const { username, email, gender, description } = req.body;
        // console.log("files",req.files[0]);

        const { userID } = req.params;
        const updateData = await UserData.findById(userID);
        const getUser = await User.findById(userID);
        // console.log("get userdata",getUser);
        // console.log(username);



        if (username !== updateData.username) updateData.username = username;
        if (email !== updateData.email) updateData.email = email;
        if (gender !== updateData.gender) updateData.gender = gender;
        if (description !== updateData.description) updateData.description = description;

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

const getAllusers = async(req,res) =>{
    try {
        const getAlldata = await UserData.find();
        res.status(200).json({getAlldata});
        // console.log(getAlldata);
        
    } catch (error) {
        console.log("user more data not found",error);
        
    }
}

module.exports = { userdata, getuserdata, updateprofile,getAllusers };