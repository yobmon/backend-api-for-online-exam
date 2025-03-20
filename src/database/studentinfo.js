const mongoose= require("mongoose");
const studentinfoschema= new mongoose.Schema({
name:{
    type:String,
    required:true
},
id:{
    type:String,
    required:true
},
password:{
    type:String,
    required:true
}}
,
{timestamps:true}


);

const student= mongoose.model("student",studentinfoschema);
module.exports=student;
