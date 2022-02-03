const Admin = require('../../Model/Admin/Admin')
const hash=require('../../Token/Bcrypt')
const jwt=require('../../Token/Jwtoken')

exports.register=async(req,res)=>{
     const hashedPassword= await hash.hashPassword(req.body.password)
     Admin.create({
        name:req.body.name,
          username:req.body.username,
          password:hashedPassword
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
         await Admin.findOne({username:req.body.username})
         .then(async (admin)=>{
           
             if(admin){
                 const checkPassword=await hash.verifyPassword(req.body.password,admin.password)
                 if(checkPassword){
                     const payload={
                         username:admin.username,
                         name:admin.name
                     }
                     const token= await jwt.generateToken(payload)
                     res.send(token)
                     console.log(token)
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
 