const mongoose = require('mongoose');

const storySchema = new mongoose.Schema({
      userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
      media: [{
        type: { type: String, enum: ["image", "video"], required: true },
        url: { type: String, required: true }, // Cloudinary URL
        public_id: { type: String, required: true },
      }],
      
      content: { type: String, default: "" },
    },
    { timestamps: true }
  
) ;

storySchema.index({ createdAt: 1 }, { expireAfterSeconds: 86400});

const Story = new mongoose.model("Story",storySchema);

module.exports = Story;