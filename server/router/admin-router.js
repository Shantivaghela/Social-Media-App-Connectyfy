const express = require("express")
const router = express.Router();
const admincontrollers = require('../controllers/message-controller');
const { login, user } = require("../controllers/auth-controller");
const { loginSchema } = require("../validations/auth-validation");
const validate = require("../middlewares/validator-middleware");
const authMiddleware = require("../middlewares/auth-middleware");
const adminMiddleware = require("../middlewares/admin_middleware");
const adminController = require("../controllers/admin-controller")


router.route("/admin-auth").post(validate(loginSchema),login);
router.route("/admin").get(authMiddleware,adminMiddleware,user);
router.route("/user-delete/:userID").delete(authMiddleware,adminMiddleware,adminController.userdelete);

// router.route("/messages/:myId/:receiverId").get(messagecontrollers.getmessage);


module.exports = router;