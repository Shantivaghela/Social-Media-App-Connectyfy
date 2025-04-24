const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  content: {
    type: String,

  },
  media: [{
    type: { type: String, enum: ["image", "video"], required: true },
    url: { type: String, required: true }, // Cloudinary URL
  }],
  likes: [
    {
      _id: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
      likedAt: { type: Date, default: Date.now }, // Stores follow time
    }
  ],
  comments: [
    {
      _id: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
      comment: { type: String, required: true },
      commentAt: { type: Date, default: Date.now }, // Stores follow time
    }
  ],
},
  { timestamps: true }
);

const Post = new mongoose.model("Post", postSchema);

module.exports = Post;