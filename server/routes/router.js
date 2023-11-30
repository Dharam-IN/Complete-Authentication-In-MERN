const express = require('express');
const userdb = require('../models/userSchema')
const router = new express.Router();


// for user register
router.post('/register', async(req, res)=>{
    const {fname, email, password, cpassword} = req.body;
    console.log(req.body)
    
    if(!fname || !email || !password || !cpassword){
        res.status(422).json({error: "Fill All Fields"})
    }

    try {
        const preuser = await userdb.findOne({email: email})

        if(preuser){
            res.status(422).json({error: "This Email Already Exist"})
        }else if(password !== cpassword){
            res.status(422).json({error: "Password and Confirm Password Not Match"})
        }else{
            const finaluser = new userdb({
                fname, email, password, cpassword
            });

            // here password hasing

            const storeData = await finaluser.save();
            
            console.log(storeData)
        }
    } catch (error) {
        res.status(422).json(error);
        console.log("Catch block Error");
    }
});

module.exports = router;

