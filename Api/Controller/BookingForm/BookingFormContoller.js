const Booking = require('../../Model/BookingForm/BookingForm');
const router = require('express').Router()

// exports.register =async (req, res) => {
    
//      Booking.create(req.body)
//           .then((data) => {
//                res.send(data)
//                console.log(data)
//           })
//           .catch((err) => {
//                return err
//           })

// }

router.post('/add',async(req,res)=>{
     const booking=Booking(req.body)
     await booking.save()
     
})

// exports.getBooking = (req, res) => {
//      Booking.find({
//           startingTime:{$gte:moment(req.query.startingTime).toDate()},
//           endingTime:{$lte:moment(req.query.endingTime).toDate()}
//      })
          

//           .then((events) => {
//                res.send(events)
//                console.log(events)
//           })
//           .catch(err=>{
//                console.log(err)
//           })
// }

router.get('/getBooking',async(req,res)=>{
     const booking=await Booking.find({
          startingTime:{$gte:moment(req.query.startingTime).toDate()},
          endingTime:{$lte:moment(req.query.endingTime).toDate()}
     })
     res.send(booking)
})
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