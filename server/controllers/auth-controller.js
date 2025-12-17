const User = require("../models/user-model")
const bcrypt = require("bcryptjs")
const UserData = require("../models/userdata-model");
const Otp = require("../models/otp-model");
const sendMailer = require("../utils/sendEmail");

const home = async (req, res) => {
    try {
        res.status(200).send("That is new router file");
    } catch (error) {
        // console.log(error);
        res.status(400).send({ msg: "page not found" })

    }

};

const register = async (req, res) => {
    try {
        // console.log(req.body);
        const { username, email, password } = req.body;

        const userExists = await User.findOne({ email })

        if (userExists) {
            return res.status(400).json({ message: "email already exists" })
        }
        const userDetail = await User.create({ username, email, password });
        // const userDetaildata = await UserData.create({username,email});

        res.status(201).json({
            msg: "regisrtion succesfully",
            token: await userDetail.generateToken(),
            userId: userDetail._id.toString()
        });
    } catch (error) {
        // console.log(error);
        res.status(400).json({ msg: "page not found" })


    }

};

const login = async (req, res) => {

    try {
        const { email, password } = req.body;

        const userExists = await User.findOne({ email });

        if (!userExists) {
            return res.status(400).json({ message: "Invalid Details" });
        }

        // const user = await bcrypt.compare(password,userExists.password);

        const user = await userExists.comparePass(password);

        if (user) {
            res.status(201).json({
                message: "login succesfully",
                token: await userExists.generateToken(),
                userId: userExists._id.toString()
            });
        } else {
            res.status(401).json({ message: "email and password not matched" });
        }
    } catch (error) {
        res.status(500).json({ message: "page not found" })
    }
}

const user = async (req, res) => {
    try {
        const userData = req.user;
        // console.log("that is from backend",userData);
        res.status(200).json({ userData });

    } catch (error) {
        console.log(error);

    }
}

const allusers = async (req, res) => {
    try {
        const allUsers = await User.find().select({ password: 0 });
        const userData = await UserData.find();
        // console.log(userData);

        const usersWithImages = allUsers.map((user) => {
            const userProfile = userData.find((data) => data._id.toString() === user._id.toString());
            return {
                ...user.toObject(),
                alldatas: userProfile || {} // Add profile image if available
            };
        });
        res.status(200).json({ usersWithImages });
        // console.log(usersWithImages);

    } catch (error) {
        console.log("users can not finds", error);

    }
}

const passupdate = async (req, res) => {
    try {
        const { userId, oldPassword, newPassword } = req.body
        // console.log(oldPassword);
        if (!userId || !oldPassword || !newPassword) {
            return res.status(400).json({ message: "All fields are required" });
        }
        const user = await User.findById(userId);
        if (!user) return res.status(404).json({ message: "User not found" });

        const isMatch = await bcrypt.compare(oldPassword, user.password);
        if (!isMatch) return res.status(400).json({ message: "Incorrect old password" });


        // const salt = await bcrypt.genSalt(10);
        // user.password = await bcrypt.hash(newPassword, salt);
        user.password = newPassword;

        await user.save();
        res.status(200).json({ message: "Password changed successfully" });

    } catch (error) {
        res.status(500).json({ message: "Error changing password", error });



    }
}

const handleForgotPassword = async (req, res) => {
    const { email } = req.body;
   
    try {
        const user = await User.findOne({ email });
        if (!user) {
            res.status(404).json({
                message: "User dose not exist"
            });
        }

         const otp = Math.floor(100000 + Math.random() * 900000);

        const newOtp = new Otp({
            email,
            otp
        });
        const message = `${otp}`;
        await sendMailer(email, "Verification password from connectyfy", message);
        res.status(200).json({ message: "otp sent to your email" });
        await newOtp.save();

    } catch (error) {
        res.status(500).json({ message: "Internal sever error", error });
    }
}

const handleVerfyOtp = async (req, res) => {
    const { email, otp } = req.body;
    
    
    try {
        const otpRecord = await Otp.findOne({ email, otp });
        if (!otpRecord || Date.now() > otpRecord.createdAt.getTime() + 60 * 60 * 1000) {
            res.status(400).json({ message: "Invalid or expired Otp" });
        }

        res.status(200).json({ message: "Otp verification successful" });
    } catch (error) {
        res.status(500).json({ message: "Internal sever error", error });

    }
}


const handleResetPassword = async (req, res) => {
    const { email, otp, newPassword } = req.body;
    try {
        const otpRecord = await Otp.findOne({ email, otp });
        
        if (!otpRecord || Date.now() > otpRecord.createdAt.getTime() + 60 * 60 * 1000) {
            res.status(400).json({ message: "Invalid or expired Otp" });
        }
        
        const user = await User.findOne({email});
        if(!user){
            res.status(404).json({message:"user does not exists"});

        }

        user.password = newPassword;
        await user.save();
        await Otp.deleteMany({email});
        res.status(200).json({message:"Password reser successfully"})

    } catch (error) {
        res.status(500).json({ message: "Internal sever error", error });

    }
}
module.exports = { 
    home, 
    register, 
    login, 
    user, 
    passupdate, 
    allusers,
    handleForgotPassword,
    handleResetPassword,
    handleVerfyOtp
};