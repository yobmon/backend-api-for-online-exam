const mongoose= require("mongoose");

const connectstudentdb=async()=>{
try{
    await mongoose.connect('mongodb://localhost:27017')
      console.log("database connected succesefully")
}
catch(err){
    console.log(err)
 }




}
module.exports=connectstudentdb;