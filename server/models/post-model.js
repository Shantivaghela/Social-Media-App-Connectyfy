const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
    userId:{type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    content:{
        type:String,
        
    },
    media:[],
    likes:[
        {
            _id: {type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
            likedAt: { type: Date, default: Date.now }, // Stores follow time
          }
        ],
    comments:[
        {
            _id: {type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
            comment:{type:String,required:true},
            likedAt: { type: Date, default: Date.now }, // Stores follow time
          }
        ],
},
{ timestamps: true }
);

const Post = new mongoose.model("Post",postSchema);

module.exports = Post;