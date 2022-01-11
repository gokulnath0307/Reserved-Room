const Admin = require('../../Model/Admin/Admin')
const hash=require('../../Token/Bcrypt')
const jwt=require('../../Token/Jwtoken')

exports.register=async(req,res)=>{
     const hashedPassword= await hash.hashPassword(req.body.Password)
     Admin.create({
          Name:req.body.Name,
          Username:req.body.Name,
          Password:hashedPassword
     })
     .then((data)=>{
          res.send(data)
          console.log(data)
     })
     .catch((err)=>{
          res.send(err)
          console.log(err)
     })
}

exports.getAdmin=(req,res)=>{
     Admin.find({})
     .then((data)=>{
         res.send(data)
     }).catch((error)=>{
         console.log(error)
     })
 }

 exports.login=async(req,res)=>{
     try{
         await Admin.findOne({Username:req.body.Username})
         .then(async (admin)=>{
           
             if(admin){
                 const checkPassword=await hash.verifyPassword(req.body.Password,admin.Password)
                 if(checkPassword){
                     const payload={
                         Username:admin.Username,
                         Name:admin.Name
                     }
                     const token= await jwt.generateToken(payload)
                     res.send({
                         success:true,
                         token:"Bearer "+token
                     })
                 }else{
                     res.send('Incorrect Password')
                 }
             }else{
                 res.send('Username not found')
             }
         })
     }catch(err){
         console.log(err)
     }
 }
 