const Chatting = require("../models/Chatting-model");
const Message = require("../models/message-model");
const { getReceiverSocketID,io} = require("../utils/socketUsers");
// const { io } = require("../server"); // Import io instance


const sendmessage = async (req, res) => {
    try {
        const {message,myId} = req.body;
        // console.log(myId,message);

        const { receiverId } = req.params;
        let conversation  = await Chatting.findOne({
            members:{$all:[myId,receiverId]}
        });

        if(!conversation){
            conversation  = await Chatting.create({
                members:[myId,receiverId]
            });
        }
        const newMessage = new Message({
            senderId:myId,
            receiverId:receiverId,
            message:message 
        })

        if(newMessage){
            conversation.messages.push(newMessage._id);
        }
        // await conversation.save();
        // await newMessage.save();
        await Promise.all([conversation.save(),newMessage.save()]);
        const receiverSocketID = getReceiverSocketID(receiverId);
        if(receiverSocketID){
            console.log(`📩 Sending message to socket ID: ${receiverSocketID}`);

            io.to(receiverSocketID).emit("newMessage",newMessage);
        } else {
            console.log(`⚠️ Receiver ${receiverId} is offline.`);
        }
        res.status(200).json(newMessage)
    } catch (error) {
        console.log("error from sending message",error);
        res.status(500).json({ error: "Internel server error",error });

        
    }
}

const getmessage = async (req, res) => {
    try {
        // const {  } = req.body;
        const {myId,receiverId } = req.params;
        // console.log(myId,receiverId);

        
        let conversation  = await Chatting.findOne({
            members:{$all:[myId,receiverId]}
        }).populate("messages");
        if(!conversation){
            return res.status(200).json([]);
        }
        const messages = conversation.messages;
        res.status(200).json(messages);

    } catch (error) {
        res.status(500).json({ error: "Error fetching messages" });
        console.log(error);
        

    }
}

module.exports = { sendmessage,getmessage};