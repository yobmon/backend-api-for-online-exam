const studentexam =require("../src/database/examsschema")

const sentexam=async(req,res)=>{
try{
    const exam = await studentexam.find({},"-__v -_id");
    console.log(exam,"exam sent")
//     const validation = await studentexam.answer[0].isCorrect;
// console.log(validation)
let boyd={}
for(let i=0;i<exam.length;i++){
    boyd={ ...boyd, question:exam[i].question,
        answer:exam[i].answer[0].text
    }
}


console.log(boyd)
res.json(boyd)
}catch(err){
    console.log(err,"error while sending exams")
}





}
module.exports=sentexam;