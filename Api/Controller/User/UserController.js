const User=require('../../Model/User/User')
const hash=require('../../Token/Bcrypt')
const jwt=require('../../Token/Jwtoken')

exports.register= async(req,res)=>{
     const hashedPassword= await hash.hashPassword(req.body.password)
    
     User.create({
          name:req.body.name,
          department:req.body.department,
          email:req.body.email,
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

 exports.updateuser=(req,res)=>{
    var newdata=new User({
           fullname:req.body.data.fullname,
           gender:req.body.data.gender,
           e_mail:req.body.data.e_mail
       })
    
        User.findOne({_id:req.body.id} )
        .then((value) => {
            console.log(value)
            User.updateOne({_id:req.body.id},{$set:req.body.data})
            .then((record)=>{
                res.send(record)
                console.log(record)
            })
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the User."
            });
        });
    }

 exports.login=async(req,res)=>{
     try{
         await User.findOne({email:req.body.email})
        
         .then(async (user)=>{
             if(user){
                 const checkPassword=await hash.verifyPassword(req.body.password,user.password)
                 if(checkPassword){
                     const payload={
                         email:user.email,
                         name:user.name
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