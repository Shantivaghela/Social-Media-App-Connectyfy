const User = require("../models/user-model")
const bcrypt = require("bcryptjs")

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

        res.status(201).json({
            msg:"regisrtion succesfully",
            token: await userDetail.generateToken(),
            userId:userDetail._id.toString()});
    }catch(error){
        // console.log(error);
        res.status(400).json({msg:"page not found"})

        
    }

};

const login = async (req,res) =>{

    try{
    const {email,password} = req.body;

    const userExists = await User.findOne({email});

    if(!userExists){
        return res.status(400).json({msg:"Invalid Details"});
    }

    // const user = await bcrypt.compare(password,userExists.password);

    const user = await userExists.comparePass(password);

    if(user){
        res.status(201).json({
            msg:"login succesfully",
            token: await userExists.generateToken(),
            userId:userExists._id.toString()});
    }else{
        res.status(401).json({msg:"email and password not matched"});
    }
}catch(error){
    res.status(500).json({msg:"page not found"})
}
}

const user = async(req,res) =>{
    try {
        const userData= req.user;
        console.log(userData);
        res.status(200).json({userData});
        
    } catch (error) {
        console.log(error);
        
    }
}

module.exports = {home,register,login,user};