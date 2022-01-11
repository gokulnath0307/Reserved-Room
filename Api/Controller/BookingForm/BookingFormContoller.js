const Booking=require('../../Model/BookingForm/BookingForm');

exports.register=(req,res)=>{

     let date_ob = new Date();
     let date = ("0" + date_ob.getDate()).slice(-2);
     let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
     let year = date_ob.getFullYear();

     console.log(year + "-" + month + "-" + date);
     

     Booking.create({
          Department:req.body.Department,
          Reason:req.body.Reason,
          Name:req.body.Name,
          Email:req.body.Email,
          Date:date,
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