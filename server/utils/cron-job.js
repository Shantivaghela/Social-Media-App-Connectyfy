const cron = require("node-cron");
const Story = require("../models/story-model");
const cloudinary = require("cloudinary").v2;

// 🕒 Runs every hour to check for expired stories
cron.schedule("0 * * * *", async () => {
  try {
    const twentyFourHoursAgo = new Date(Date.now() - 24 * 60 * 60 * 1000);
    
    // 🔍 Find expired stories
    const expiredStories = await Story.find({ createdAt: { $lt: twentyFourHoursAgo } });

    for (const story of expiredStories) {
      // 🚀 Delete each media file from Cloudinary
      for (const media of story.media) {
        await cloudinary.uploader.destroy(media.public_id);
      }
      // 🗑 Delete story from MongoDB
      await Story.deleteOne({ _id: story._id });
      console.log(`✅ Deleted story ${story._id} and media from Cloudinary`);
    }
  } catch (error) {
    console.error("❌ Error deleting expired stories:", error);
  }
});

// console.log("🕒 Cron job scheduled to delete expired stories every hour");
