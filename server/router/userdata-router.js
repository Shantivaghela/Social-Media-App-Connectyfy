const express = require("express");
const router = express.Router();
const userdatacontroller = require("../controllers/userdata-controller");
const fileMiddleware = require("../middlewares/filemulter-middleware");
const upload = require("../middlewares/filemulter-middleware")

router.route("/userdata").post(upload.fields([
    { name: "pimage", maxCount: 1 }, 
    { name: "bimage", maxCount: 1 }
]),userdatacontroller.userdata).get(userdatacontroller.getAllusers);
router.route("/getuserdata/:userID").get(userdatacontroller.getuserdata);
router.route("/profile-update/:userID").put(upload.fields([
    { name: "pimage", maxCount: 1 }, 
    { name: "bimage", maxCount: 1 }
]),userdatacontroller.updateprofile);
router.route("/follow/:userID").post(userdatacontroller.addfollow);
router.route("/unfollow/:userID").put(userdatacontroller.unfollow);
router.route("/conformreq/:userID").post(userdatacontroller.conformreq);


module.exports = router;