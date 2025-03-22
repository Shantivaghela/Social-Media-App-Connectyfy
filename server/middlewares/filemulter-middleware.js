const multer = require("multer")
const path = require("path");

// console.log("path...",path);
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './public/images')
    },
    filename: function (req, file, cb) {
        const ext = path.extname(file.originalname);
        
        cb(null, file.fieldname + "-" + Date.now() + ext); 
    }
  })
  
  
// 🔹 Multer Upload Middleware
const upload = multer({
    storage: storage,
    // fileFilter: fileFilter,
    // limits: { fileSize: 2 * 1024 * 1024 }  // ✅ Limit file size to 2MB
});

module.exports = upload;