const mongoose = require('mongoose');

const otpSchema = new mongoose.Schema({
    otp:{
        type:Number,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    createdAt:{
        type:Date,
        default:Date.now,
        expires:"10m",
    }
})

const Otp = mongoose.model('otp',otpSchema);
module.exports = Otp;