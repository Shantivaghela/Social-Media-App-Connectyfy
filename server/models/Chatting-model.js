const mongoose = require("mongoose");
const Message = require("./message-model");

const chatSchema = new mongoose.Schema(
    {
        members: [
            { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }
        ],

        messages: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: Message,
                required: true,
                default: []
            }
        ],
    },
    { timestamps: true }
);

const Chatting = mongoose.model("Chatting", chatSchema);
module.exports = Chatting;
