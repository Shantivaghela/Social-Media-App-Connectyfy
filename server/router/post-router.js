const express = require("express");
const router = express.Router();
const upload = require("../middlewares/poststore.middleware");
const postdatacontroller = require("../controllers/post-controller")

router.route("/upload-post").post(upload,postdatacontroller.addpost);


module.exports = router;