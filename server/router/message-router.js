const express = require("express")
const router = express.Router();
const messagecontrollers = require('../controllers/message-controller')


router.route("/send-message/:receiverId").post(messagecontrollers.sendmessage);
router.route("/messages/:myId/:receiverId").get(messagecontrollers.getmessage);


module.exports = router;