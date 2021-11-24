const mongoose=require('mongoose')

const DayCardSchema=mongoose.Schema({

     Img:{
          type:String,
          require:true
     },
     Name:{
          type:String,
          require:true
     }
    
})
module.exports =mongoose.model('DayCard',DayCardSchema)