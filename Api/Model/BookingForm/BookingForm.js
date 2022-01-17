const mongoose=require('mongoose')

const BookingFormSchema=mongoose.Schema({

     // department:String,
     // reason:String,
     // name:String,
     email:String,
     startingTime:Date,
     endingTime:Date

})
module.exports =mongoose.model('Booking',BookingFormSchema)