const Webtoken = require('./jwtsetup.js')
const student = require('../database/studentinfo.js')
const bcrypt = require('bcrypt');
const Signup =  async(req,res)=>{
    try{
    const {name,id,password}= req.body;
if (!name||!id||!password){
return res.status(400).json({required:'all fields are required'})

}
 const isstudent = await student.findOne({id});
if (isstudent){
    return res.status(404).json({
    response:'email already found'
    })
}
const salt = await bcrypt.genSalt(7);
const hashpassword = await bcrypt.hash(password,salt);
const newStudent = await new student({
    name:name,
    id:id,
    password:hashpassword
})

        await newStudent.save()

        try {
            await Webtoken(newStudent._id, res);
            res.status(200).json({
                name: newStudent.name,
                response: 'User created successfully'
            });
        } catch (error) {
            console.error('Error in token creation:', error);
            res.status(500).json({ error: 'Error in token creation' });
     }
  
 }
    catch(error){
        res.status(500).json({
            response:'server error  her'})
        console.log('errorere')
    }
    }
    module.exports=Signup;