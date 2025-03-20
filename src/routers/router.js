const express= require("express");
const router= express.Router();
const loginstudent = require ("../src/middlewares/studentlogin.js")
const signupstudent= require("../src/middlewares/studentsignin.js")
const examsent= require("../src/adminstratorpanel/adminstrator.js")
const recivedresult= require("../src/resultschema/reulthandler.js")
const sentexam= require("../sentexam/sentexam.js")

router.post("/login",loginstudent);
router.post("/signup",signupstudent);
router.post("/adminstrator/exams",examsent);
router.get("/home/exam",sentexam);
router.post("/home/exams",recivedresult);

module.exports=router;