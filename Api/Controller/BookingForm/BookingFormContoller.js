const Booking = require('../../Model/BookingForm/BookingForm');
// const router = require('express').Router()



exports.register = (req, res) => {

     var date_ob = new Date();
     var day = ("0" + date_ob.getDate()).slice(-2);
     var month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
     var year = date_ob.getFullYear();
     
     var hours = date_ob.getHours();
     var minutes = date_ob.getMinutes();
     var seconds = date_ob.getSeconds();
     
     var currentDate = day + "-" + month + "-" + year;
     var setTime =  hours + ":" + minutes + ":" + seconds;
     
     console.log(req.body)
    
     Booking.create({
          department:req.body.department,
          reason:req.body.reason,
          name:req.body.name,
          email:req.body.email,
          date:currentDate,
          startingTime:req.body.startingTime,
          endingTime:req.body.endingTime,
     })
          .then((data) => {
               res.send(data)
               console.log(data)
          })
          .catch((err) => {
               console.log(err)
          })

}



exports.getBooking = (req, res) => {
     Booking.find({

          // startingTime:{$gte:moment(req.query.startingTime).toDate()},
          // endingTime:{$lte:moment(req.query.endingTime).toDate()}
          user:req.body.userid
     })
          

          .then((events) => {
               res.send(events)
               console.log(events)
          })
          .catch(err=>{
               console.log(err)
          })
}

exports.getOneBookingDetails=(req,res)=>{
     Booking.findOne({_id:req.body.id})
     .then((data)=>{
         console.log(data)
         res.send(data)
        
     }).catch(error=>{
         res.send(error)
     })
 }

exports.deleteBooking = (req, res) => {
     Booking.deleteOne({
          id: req.body.id
     })
}

exports.editBooking=(req,res)=>{

     var data=req.body.data
   
     Booking.findOne({_id:data.id})
     .then((value)=>{
        
      const bookingData={
          
          startingTime:data.startingTime,
          endingTime:data.endingTime
       }
   
       Booking.updateOne({_id:data.id},{$set:bookingData})
       .then((value)=>{
           res.send(value)
       }).catch((err)=>{
           console.log(err)
       })
       
     }).catch((err)=>{
         console.log(err)
     })
      
   }


   // router.post('/add',async(req,res)=>{
//      const booking=Booking(req.body)
//      await booking.save()
     
// })
// router.get('/getBooking',async(req,res)=>{
//      const booking=await Booking.find({
//           startingTime:{$gte:moment(req.query.startingTime).toDate()},
//           endingTime:{$lte:moment(req.query.endingTime).toDate()}
//      })
//      res.send(booking)
// })