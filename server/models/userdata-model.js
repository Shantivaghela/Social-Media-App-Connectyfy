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
        // required:true
    },
    description:{
        type:String,
        // required:true
    },
    pimage:{
        type:String,
        // required:true
    },
    bimage:{
        type:String,
        // required:true
    },
    followers:[
        {
            _id: {type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
            followedAt: { type: Date, default: Date.now }, // Stores follow time
          }
        ],
    following:[
        {
            _id: {type: mongoose.Schema.Types.ObjectId, ref: "User", required: true  },
            followedAt: { type: Date, default: Date.now }, // Stores follow time
          },
    ],
    requests:[
        {
            _id: {type: mongoose.Schema.Types.ObjectId, ref: "User", required: true  },
            followedAt: { type: Date, default: Date.now }, // Stores follow time
          },
    ],
},
{ timestamps: true }
);

const UserData = new mongoose.model("UserData",userdatSchema);

module.exports = UserData;