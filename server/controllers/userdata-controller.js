const UserData = require("../models/userdata-model");
const User = require("../models/user-model");
const user = require("../controllers/auth-controller")


const userdata = async(req,res) =>{
    try{
        // const data = req.body;
        const {_id,username,email,gender,description}= req.body;
        // console.log(req.files);
        const profileDetails = new UserData({
            _id,
            username,
            email,
            gender,
            description,
            pimage: req.files["pimage"] ? req.files["pimage"][0].path : "",
            bimage: req.files["bimage"] ? req.files["bimage"][0].path : ""
        });
        await profileDetails.save();
        res.status(201).json({ message: "Profile created successfully", profile: profileDetails });
    }catch(error){
        // console.log(error);
        res.status(400).json({msg:"page not found"})
        
    }
}

const getuserdata = async(req,res) =>{
    try {
        
        
        const {userID} = req.params;
        // const userID = "67c5377116637cce8c11bffa";
        // console.log(userID);
         
        const userdata = await UserData.findById(userID);

        if(!userdata){
            console.log("userdata not get");
            
        }

        res.status(200).json({userdata})
    } catch (error) {

        console.log(error);
        
        
    }
}

module.exports = {userdata,getuserdata};