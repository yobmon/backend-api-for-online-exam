const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const router = require("./routers/router");  
const db= require("./database/studentinfoconnection")
const db2= require("./database/examsdbconnect")
// Database configuration

const app = express();
app.use(cookieParser());
app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use('/',router)








app.listen(3000,()=>{
console.log("server is running on port 3000");
db();
db2();

});
