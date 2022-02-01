const mongoose = require('mongoose')

const BookingFormSchema = mongoose.Schema({

     department: {
          type: String,
          require: true
     },
     reason: {
          type: String,
          require: true
     },
     name: {
          type: String,
          require: true
     },
     email: {
          type: String,
          require: true
     },
     date: {
          type: String,
          require: true

     },
     start: {
          type: String,
          require: true
     },
     end: {
          type: String,
          require: true


     }

})
module.exports = mongoose.model('Booking', BookingFormSchema)