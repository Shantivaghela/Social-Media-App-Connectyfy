const User = require("../models/user-model")

const home = async (req,res) => {
    try{
        res.status(200).send("That is new router file");
    }catch(error){
        // console.log(error);
        res.status(400).send({msg:"page not found"})
        
    }

};

const register = async (req,res) => {
    try{
        // console.log(req.body);
        const {username,email,password} = req.body;

        const userExists = await User.findOne({email})

        if(userExists){
            return res.status(400).json({msg:"email already exists"})
        }
        const userDetail = await User.create({username,email,password});

        res.status(201).json({msg:"regisrtion succesfully",
            token: await userDetail.generateToken(),
        userId:userDetail._id.toString()});
    }catch(error){
        // console.log(error);
        res.status(400).json({msg:"page not found"})

        
    }

};



module.exports = {home,register};