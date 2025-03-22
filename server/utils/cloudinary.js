import { v2 as cloudinary } from 'cloudinary';
import {fs} from "fs";


    cloudinary.config({ 
        cloud_name: process.env.CLOUDINARY_NAME, 
        api_key: process.env.CLOUDINARY_KEY, 
        api_secret: process.env.CLOUDINARY_SECRET 
    });

    const uploadToCloudinary = async (filePath) => {
        try {
            const result = await cloudinary.uploader.upload(filePath, {
                folder: "uploads", // Cloudinary folder name
                use_filename: true,
            });
    
            // 🔹 Delete Local File After Upload
            fs.unlinkSync(filePath);
    
            return result.secure_url; // Return Cloudinary URL
    
        } catch (error) {
            console.error("Cloudinary Upload Error:", error);
            throw new Error("File upload failed");
        }
    };
    
    module.exports = { cloudinary, uploadToCloudinary };