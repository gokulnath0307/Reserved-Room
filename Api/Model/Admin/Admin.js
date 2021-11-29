const mongoose=require('mongoose')

const AdminSchema=mongoose.Schema({

     Name:{
          type:String,
          require:true
     },
     Username:{
          type:String,
          require:true
     },
     Password:{
          type:String,
          require:true
     }
})
module.exports=mongoose.model('Admin',AdminSchema)