const Booking=require('../../Model/BookingForm/BookingForm');

exports.register=(req,res)=>{
     Booking.create({
          Department:req.body.Department,
          Reason:req.body.Reason,
          Name:req.body.Name,
          Email:req.body.Email,
          Date:req.body.Date,
          StartingTime:req.body.StartingTime,
          EndingTime:req.body.EndingTime

     })
     .then((data)=>{
          res.send(data)
          console.log(data)
     })
     .catch((err)=>{
          console.log(err)
     })
     
}

exports.getBooking=(req,res)=>{
     Booking.find({
          Date:req.body.Date
     })
     .sort({
          StartingTime:req.body.StartingTime,
          EndingTime:req.body.EndingTime
     })
     
     .then((data)=>{
          res.send(data)
          console.log(data)
     })
}
exports.deleteBooking=(req,res)=>{
     Booking.deleteOne({
          id:req.body.id
     })
}