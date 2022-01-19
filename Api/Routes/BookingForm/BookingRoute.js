const express=require('express');
const router=express.Router();
const BookingForm=require('../../Controller/BookingForm/BookingFormContoller')

router.post('/add',BookingForm.register)
router.get('/getBooking',BookingForm.getBooking)
router.post('/deleteBooking',BookingForm.deleteBooking)
router.post('/getOneBookingDetails',BookingForm.getOneBookingDetails)
router.put('/editBooking',BookingForm.editBooking)


module.exports=router;