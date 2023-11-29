const express = require('express');
const userdb = require('../models/userSchema')
const router = new express.Router();


// for user register
router.post('/register', async(req, res)=>{
    const {fname, email, password, cpassword} = req.body;
    
    if(!fname || !email || !password || !cpassword){
        res.status(422).json({error: "Fill All Fields"})
    }

    try {
        const preuser = await userdb.findone({email: email})

        if(preuser){
            res.status(422).json({error: "This Email Already Exist"})
        }else if(password !== cpassword){
            res.status(422).json({error: "Password and Confirm Password Not Match"})
        }
    } catch (error) {
        
    }
})

module.exports = router;