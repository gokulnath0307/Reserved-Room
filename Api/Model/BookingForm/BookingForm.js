const mongoose=require('mongoose')

const BookingFormSchema=mongoose.Schema({

     Department:{
          type:String,
          require:true
     },
     Reason:{
          type:String,
          require:true
     },
     Name:{
          type:String,
          require:true
     },
     Email:{
          type:String,
          require:true
     },
     Date:{
          type:Date,
          require:true
     },
     StartingTime:{
          type:String,
          require:true
     },
     EndingTime:{
          type:String,
          require:true
     }

})
module.exports =mongoose.model('Booking',BookingFormSchema)