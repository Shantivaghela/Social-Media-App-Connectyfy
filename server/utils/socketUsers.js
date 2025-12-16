const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const app = express();

const server = http.createServer(app);
const io = new Server(server, {
    cors:{
    origin:["http://localhost:5173","http://localhost:5174","https://connectyfyweb.vercel.app"],
    method:["GET,POST,PUT,DELETE,PATCH,HEAD"],
    // Credentials:true
    }
});

const getReceiverSocketID = (receiverId) => {
    return users[receiverId]; // Return null if the receiver is not online
};
const users = {}; // Store online users

io.on("connection", (socket) => {
  const userId = socket.handshake.query.userId;
  if(userId){
    users[userId]=socket.id;
   
    
  }
socket.on("sendNotification",({senderName,receiverId,type})=>{
  const reciever = users[receiverId];
  io.to(reciever).emit("getNotification",{
    senderName,type,
  })
})
socket.on("typing", ({ senderId, receiverId }) => {
  const receiverSocketID = users[receiverId];
  // console.log("typing",senderId,receiverSocketID);
  
  if (receiverSocketID) {
      io.to(receiverSocketID).emit("typing", {senderId});
  }
});

socket.on("stopTyping", ({ senderId, receiverId }) => {
  const receiverSocketID = users[receiverId];
  if (receiverSocketID) {
      io.to(receiverSocketID).emit("stopTyping", {senderId});
  }
});

 io.emit("getOnlineUsers",Object.keys(users))
  socket.on("disconnect", () => {
   
    delete users[userId];
    io.emit("getOnlineUsers",Object.keys(users))

  });
  
});


module.exports = { app,server,io,getReceiverSocketID};
