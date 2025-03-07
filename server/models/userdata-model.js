const mongoose = require("mongoose");

const userdatSchema = new mongoose.Schema({
    _id: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    gender:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    pimage:{
        type:String,
        // required:true
    },
    bimage:{
        type:String,
        // required:true
    },
});

const UserData = new mongoose.model("UserData",userdatSchema);

module.exports = UserData;