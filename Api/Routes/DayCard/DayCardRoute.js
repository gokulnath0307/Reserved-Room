const express=require('express');
const router=express.Router();
const DayCard=require('../../Controller/DayCard/DayCardController')

router.post('/register',DayCard.register);
router.post('/getDayCard',DayCard.getCardImg);

module.exports=router;