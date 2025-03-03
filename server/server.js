require("dotenv").config();
const express = require("express");
const app = express();
const router = require('./router/auth-router');
const connectDB = require("./utils/db")

app.use(express.json());

app.use("/api/auth/",router)

// app.get('/',(req,res)=>{
//     res.status(200).send("server is runnig");

// });
// app.get('/login',(req,res)=>{
//     res.status(200).send("That is login page");

// });

const PORT = 8080;

connectDB().then(()=>{

app.listen(PORT,()=>{
    console.log(`server is runnig on ${PORT}`);
    
});

});