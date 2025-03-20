


const { text } = require("express");
const mongoose = require("mongoose")
const answerSchema = new mongoose.Schema({
  text: {
      type: String,
      required: true,
    },
    isCorrect: {
      type: Boolean,
      required: true,
    }
  },{
    _id:false
});

const studentexam= new mongoose.Schema({
    question:{
        type:String,
        required:true
    },
    answer:[answerSchema]




   })

const student_exam= mongoose.model("student_exam",studentexam);
module.exports =  student_exam ;