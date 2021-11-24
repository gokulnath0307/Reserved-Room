const express=require('express');
const router=express.Router();
const BookingForm=require('../../Controller/BookingForm/BookingFormContoller')

router.post('/register',BookingForm.register)
router.post('/getBooking',BookingForm.getBooking)
router.get('/deleteBooking',BookingForm.deleteBooking)

module.exports=router;