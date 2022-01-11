const User=require('../../Model/User/User')
const hash=require('../../Token/Bcrypt')
const jwt=require('../../Token/Jwtoken')

exports.register= async(req,res)=>{
     const hashedPassword= await hash.hashPassword(req.body.Password)
     let date_ob = new Date();
     let date = ("0" + date_ob.getDate()).slice(-2);
     let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
     let year = date_ob.getFullYear();

     console.log(date + "-" + month + "-" + year);
     User.create({
          Name:req.body.Name,
          Department:req.body.Department,
          Email:req.body.Email,
          Password:hashedPassword,
          Date:date_ob
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
exports.getUser=(req,res)=>{
     User.find({})
     .then((data)=>{
         res.send(data)
     }).catch((error)=>{
         console.log(error)
     })
}
exports.getUsers=(req,res)=>{
     User.findOne({_id:req.body.id})
     .then((data)=>{
          res.send(data)
          console.log(data)
     })
     .catch((err)=>{
          console.log(err)
     })
 }
 exports.login=async(req,res)=>{
     try{
         await User.findOne({Email:req.body.Email})
        
         .then(async (user)=>{
             if(user){
                 const checkPassword=await hash.verifyPassword(req.body.Password,user.Password)
                 if(checkPassword){
                     const payload={
                         Email:user.Email,
                         Name:user.Name
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