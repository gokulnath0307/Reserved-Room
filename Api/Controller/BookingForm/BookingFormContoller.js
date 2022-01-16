const Booking = require('../../Model/BookingForm/BookingForm');

exports.register = (req, res) => {
         
     Booking.create(req.body)
          .then((data) => {
               res.send(data)
               console.log(data)
          })
          .catch((err) => {
               return err
          })

}

exports.getBooking = (req, res) => {
     Booking.find({
          startingTime:{$gte:moment(req.query.startingTime).toDate()},
          endingTime:{$lte:moment(req.query.endingTime).toDate()}
     })
          

          .then((events) => {
               res.send(events)
               console.log(events)
          })
          .catch(err=>{
               console.log(err)
          })
}
exports.deleteBooking = (req, res) => {
     Booking.deleteOne({
          id: req.body.id
     })
}

exports.updateBooking=(req,res)=>{

     var data=req.body.data
   
     Booking.findOne({_id:data.id})
     .then((value)=>{
        
      const addressData={
          
          startingTime:data.startingTime,
          endingTime:data.endingTime
       }
   
       Booking.updateOne({_id:data.id},{$set:addressData})
       .then((value)=>{
           res.send(value)
       }).catch((err)=>{
           console.log(err)
       })
       
     }).catch((err)=>{
         console.log(err)
     })
      
   }