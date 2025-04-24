const express = require("express");
const router = express.Router();
const upload = require("../middlewares/poststore.middleware");
const postdatacontroller = require("../controllers/post-controller");
const authMiddleware = require("../middlewares/auth-middleware");

router.route("/upload-post").post(
    upload.fields([
        { name: "video", maxCount: 1},
        { name: "images", maxCount: 10}
    ]),postdatacontroller.addpost).get(authMiddleware,postdatacontroller.sendposts);

router.route('/get-posts/:userID').get(postdatacontroller.sendallposts).put(postdatacontroller.addMore);
router.route('/delete-posts/:postID').delete(postdatacontroller.postdelete);



module.exports = router;