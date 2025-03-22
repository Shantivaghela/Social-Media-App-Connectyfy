require("dotenv").config();
const cors = require("cors");
const express = require("express");
const app = express();
const router = require('./router/auth-router');
const userDatarouter = require('./router/userdata-router');
const postDatarouter = require("./router/post-router");
const connectDB = require("./utils/db");
const errorMiddleware = require("./middlewares/error-middleware");


const corsOption = {
    origin:"http://localhost:5173",
    method:"GET,POST,PUT,DELETE,PATCH,HEAD",
    Credentials:true
}


app.use(cors(corsOption));

app.use(express.json());
app.use(express.static("public"));
app.use("/api/auth/",router);
app.use("/api/user/",userDatarouter);
app.use("/api/post/",postDatarouter);


app.use(errorMiddleware);

const PORT = 8080;

connectDB().then(()=>{

app.listen(PORT,()=>{
    console.log(`server is runnig on ${PORT}`);
    
});

});