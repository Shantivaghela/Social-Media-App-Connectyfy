const cloudinary = require("cloudinary").v2;
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const fs = require("fs");
const multer = require("multer");

    cloudinary.config({ 
        cloud_name:process.env.CLOUDINARY_NAME, 
        api_key:process.env.CLOUDINARY_KEY, 
        api_secret:process.env.CLOUDINARY_SECRET 
    });

    const uploadToCloudinary = async (filePath,folder,resourceType) => {
        try {
            if (!fs.existsSync(filePath)) {
                throw new Error("File not found: " + filePath);
            }
            const result = await cloudinary.uploader.upload(filePath, {
                folder: folder, // Cloudinary folder name
                use_filename: true,
                resource_type:resourceType
            });
    
            // 🔹 Delete Local File After Upload
             fs.unlinkSync(filePath);
    
            return result.secure_url; // Return Cloudinary URL
    
        } catch (error) {
            console.error("Cloudinary Upload Error:", error);
            throw new Error("File upload failed");
        }
    };
    const deleteCloudinaryMedia = async (mediaUrl) => {
        try {
          // Extract public ID
          const publicId = mediaUrl
            .split("/")
            .slice(-2)
            .join("/") // Extracts "uploads/video-1743017180849_zncz7w"
            .split(".")[0]; // Removes file extension (e.g., .mp4, .jpg)
      
          // Delete from Cloudinary
          await cloudinary.uploader.destroy(publicId, { resource_type: "video" });
      
        //   console.log(`Deleted: ${publicId}`);
          return { success: true, message: "Media deleted successfully" };
        } catch (error) {
        //   console.error("Error deleting media:", error);
          return { success: false, message: "Failed to delete media" };
        }
      };
      const storage = new CloudinaryStorage({
        cloudinary,
        params: async (req, file) => ({
          folder: "stories", // Folder in Cloudinary
          resource_type: "auto", // Auto-detect if image or video
          public_id: `${Date.now()}-${file.originalname}`,
        }),
      });
      
      // Multer setup with Cloudinary
      const upload = multer({ storage });
      
      module.exports = { cloudinary, upload };
    module.exports = { cloudinary, uploadToCloudinary,deleteCloudinaryMedia,upload };