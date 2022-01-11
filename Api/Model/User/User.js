const mongoose=require('mongoose')

const UserSchema=mongoose.Schema({

     Name:{
          type:String,
          require:true
     },
     Department:{
          type:String,
          require:true
     },
     Email:{
          type:String,
          require:true
     },
     Password:{
          type:String,
          require:true
     },
     Date:{
          type:Date,
          require:true
     }
})
module.exports=mongoose.model('UserDetails',UserSchema)