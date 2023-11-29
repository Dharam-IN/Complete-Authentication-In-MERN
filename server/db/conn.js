const dotenv = require('dotenv')
const mongoose = require('mongoose')

dotenv.config({ path: './db/.env' });

const DB = process.env.DATABASE

mongoose.connect(DB,{
    useUnifiedTopology: true,
    useNewUrlParser: true
}).then(()=>console.log("Database Connected")).catch((errr)=>{
    console.log(errr)
})
