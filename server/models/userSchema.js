const { default: mongoose } = require('mongoose')
const mongoose = require('mongoose')
const validator = require("validator")

const mongoose = new mongoose.Schema({
    fname:{
        type: String,
        required: true,
        trim: true
    },
    email:{
        type: String,
        required: true,
        unique: true,
        validator(value){
            if(!validator.isEmail(value)){
                throw new error("not valid error")
            }
        }
    },
    password:{
        type: String,
        required: true,
        minLength: 6
    },
    cpassword:{
        type: String,
        required: true,
        minLength: 6
    },
    tokens:[
        {
            token:{
                type: String,
                required: true
            }
        }
    ]
})
