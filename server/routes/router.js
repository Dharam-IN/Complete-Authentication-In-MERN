const express = require('express');
const userdb = require('../models/userSchema')
const router = new express.Router();
const bcrypt = require("bcryptjs");
const authenticate = require("../middleware/authenticate")


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
            
            // console.log(storeData)
            res.status(201).json({status: 201, storeData})
        }
    } catch (error) {
        res.status(422).json(error);
        console.log("Catch block Error");
    }
});

// User Login 

router.post("/login", async (req,res)=>{
    // console.log(req.body)
    const {email, password} = req.body;

    if(!email || !password){
        res.status(422).json({error: "Fill All the details"})
    }

    try {
        const userValid = await userdb.findOne({email: email});

        if(userValid){
            const isMatch = await bcrypt.compare(password, userValid.password)

            if(!isMatch){
                res.status(422).json({error: "Invalid Details"})
            }else{
                // token generate

                const token = await userValid.generateAuthtoken();
                console.log(token)

                // cookiegenerate

                res.cookie("usercookie", token,{
                    expires: new Date(Date.now()+9000000),
                    httpOnly: true
                });

                const result = {
                    userValid,
                    token
                }
                res.status(201).json({status: 201, result})
            }
        }
    } catch (error) {
        res.status(422).json(error)
    }

});


// user valid

router.get("/validuser", authenticate, async(req, res)=>{
    console.log("Done")
})


module.exports = router;
