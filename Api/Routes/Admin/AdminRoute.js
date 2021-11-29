const express=require('express');
const router=express.Router();
const Admin=require('../../Controller/Admin/AdminController')

router.post('/register',Admin.register)
router.get('/getAdmin',Admin.getAdmin)
router.post('/login',Admin.login)

module.exports=router;