const express=require('express');
const router=express.Router();
const BookingForm=require('../../Controller/BookingForm/BookingFormContoller')

//router.post('/add',BookingForm.register)
//router.post('/getBooking',BookingForm.getBooking)
router.get('/deleteBooking',BookingForm.deleteBooking)
router.put('/updateform',BookingForm.updateBooking)
module.exports=router;