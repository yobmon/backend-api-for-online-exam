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
// app.js
app.get('/danger', (req, res) => {
  try {
    // risky op
  } catch (err) {
    res.status(500).send(<pre>${err.stack}</pre>); // reveals stack trace
  }
});


// app.use((err, req, res, next) => {
//   // Log full error internally (file or log service)
//   console.error(err);
//   res.status(500).send('Internal server error'); // generic message
// });

// // Ensure env-driven config; never commit secrets
// // Use HTTPS, set secure headers (helmet)
// const helmet = require('helmet');
// app.use(helmet());
//this is the fixed version of the above code







app.listen(3000,()=>{
console.log("server is running on port 3000");
db();
db2();

});
