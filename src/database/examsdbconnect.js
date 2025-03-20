const mongoose= require("mongoose");

const connectstudentdb=async()=>{
try{
    await mongoose.createConnection('mongodb://localhost:27017/exams')
      console.log("database2 connected succesefully")
}
catch(err){
    console.log(err)
 }

} 
module.exports=connectstudentdb;