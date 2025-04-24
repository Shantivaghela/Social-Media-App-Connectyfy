const express = require('express');
const router = express.Router();
const storycontrollers = require('../controllers/story-controller');
const { upload } = require('../utils/cloudinary');


router.route("/story-upload").post(upload.array("media", 5),storycontrollers.storyadd).get(storycontrollers.getstorys);


module.exports = router ;