const Booking = require('../../Model/BookingForm/BookingForm');

exports.register = (req, res) => {

     
     console.log(req.body)
    
     Booking.create({
          department:req.body.department,
          reason:req.body.reason,
          name:req.body.name,
          date:req.body.date,
          start:req.body.start,
          end:req.body.end

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
     Booking.find().sort({'_id': -1}).limit()
          

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
     Booking.remove({_id: req.body.id})
     .then(data=>{
          console.log(data)
          res.send(data)
     })
     .catch(err=>{
          console.log(err)
     })

}

exports.editBooking=(req,res)=>{

     
   
     Booking.findOne({_id:req.body.id})
     .then(()=>{
        
      const bookingData={
          
          start:req.body.start,
          end:req.body.end,
          date:req.body.date
       }
   
       Booking.updateOne({_id:req.body.id},{$set:bookingData})
       .then((data)=>{
           res.send(data)

           console.log(data)
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