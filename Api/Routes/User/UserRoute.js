const express=require('express');
const router=express.Router();
const User=require('../../Controller/User/UserController')

router.post('/register',User.register)
router.get('/getuser',User.getUser)
router.get('/getusers',User.getUsers)
router.post('/login',User.login)

module.exports=router;