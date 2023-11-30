const { default: mongoose } = require('mongoose')
// const mongoose = require('mongoose')
const validator = require("validator")
const bcrypt = require('bcrypt')

const userSchema = new mongoose.Schema({
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


// hash password
userSchema.pre("save", async function(next){
    this.password = await bcrypt.hash(this.password, 12);
    this.cpassword = await bcrypt.hash(this.cpassword, 12);

    next();
})

// Creating model
var userdb = new mongoose.model("users", userSchema);


module.exports = userdb;
