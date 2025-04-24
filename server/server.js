require("dotenv").config();
require("./utils/cron-job");
const cors = require("cors");
const express = require("express");

const router = require('./router/auth-router');
const userDatarouter = require('./router/userdata-router');
const postDatarouter = require("./router/post-router");
const connectDB = require("./utils/db");
const errorMiddleware = require("./middlewares/error-middleware");
const storyrouter = require('./router/story-router');
const messagerouter = require('./router/message-router');
const {server,app} = require('./utils/socketUsers')
const adminrouter = require('./router/admin-router')

// app.use(express.json({ limit: "1000mb" }));
// app.use(express.urlencoded({ limit: "1000mb", extended: true }));


app.use(cors());



app.use(express.json());
app.use(express.static("public"));
app.use("/api/auth/",router);
app.use("/api/user/",userDatarouter);
app.use("/api/post/",postDatarouter);
app.use("/api/story/",storyrouter);
app.use("/api/message/",messagerouter);
app.use("/api/admin/",adminrouter);


app.use(errorMiddleware);

const PORT = 8080;

connectDB().then(()=>{

    server.listen(PORT,()=>{
    console.log(`server is runnig on ${PORT}`);
    
});

});