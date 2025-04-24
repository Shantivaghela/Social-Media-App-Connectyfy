const express = require("express")
const router = express.Router();
const authcontrollers = require('../controllers/auth-controller');
const authMiddleware = require("../middlewares/auth-middleware")
const validate = require("../middlewares/validator-middleware");
const {signupSchema,loginSchema} = require("../validations/auth-validation");


router.route("/").get(authcontrollers.home);
router.route("/register").post(validate(signupSchema), authcontrollers.register);
router.route("/login").post(validate(loginSchema),authcontrollers.login).put(authcontrollers.passupdate);
router.route("/user").get(authMiddleware,authcontrollers.user);
router.route("/allusers").get(authMiddleware,authcontrollers.allusers);

module.exports = router;