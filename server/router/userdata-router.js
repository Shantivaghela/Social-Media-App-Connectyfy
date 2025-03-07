const express = require("express");
const router = express.Router();
const userdatacontroller = require("../controllers/userdata-controller");
const fileMiddleware = require("../middlewares/filemulter-middleware");
const upload = require("../middlewares/filemulter-middleware")

router.route("/userdata").post(upload.fields([
    { name: "pimage", maxCount: 1 }, 
    { name: "bimage", maxCount: 1 }
]),userdatacontroller.userdata);
router.route("/getuserdata/:userID").get(userdatacontroller.getuserdata);

module.exports = router;