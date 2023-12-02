const jwt = require("jsonwebtoken");
const userdb = require("../models/userSchema")
const dotenv = require('dotenv')

dotenv.config({path: './db/.env'})

const authenticate = async (req, res, next)=>{
    try {
        const token = req.headers.Authorization;
        console.log(token);
    } catch (error) {
        console.log("india")
    }
}

module.exports = authenticate;
