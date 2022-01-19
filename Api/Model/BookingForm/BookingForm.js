const mongoose=require('mongoose')

const BookingFormSchema=mongoose.Schema({

     department:{
          type:String,
          require:true
     },
     reason:{
          type:String,
          require:true
     },
     name:{
          type:String,
          require:true
     },
     email:{
          type:String,
          require:true
     },
     date:{
          type:Date ,
         
     },
     startingTime:{
          type:Date,
          
          
     },
     endingTime:{
          type:Date,
          
          
     }

})
module.exports =mongoose.model('Booking',BookingFormSchema)