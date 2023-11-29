const express = require('express');
const router = new express.Router();


// for user register
router.post('/register', async(req, res)=>{
    console.log(req.body)
})

module.exports = router;