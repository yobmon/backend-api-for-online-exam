
const Student = require('../src/adminstratorpanel/database/studentinfo.js')

const Studentlogin =async (req,res)=>{
    try{
const {id,password}= req.body;
const student= await Student.findOne({id});
if(!student){
    return res.status(404).json({ response: 'User not found' });
}
const isMatch= await bcrypt.compare(password,student.password);
if(!isMatch){
    return res.status(404).json({ response: 'Wrong password' });
}   if (!isMatch){
    return res.status(400).json({
        response:'incorrect  password',
           name:isuser.name
    })
   }
   

   await Webtoken(isuser._id,res)

   res.status(200).json({response:'login scucess'})


    }

    catch(err){
        console.log(err);
        return res.status(500).json({ message: err.message });
    }









}

module.exports= Studentlogin;
