const express = require('express');
const app = express();
require("./db/conn.js")
const router = require('./routes/router')
const cors = require("cors")
const port = 8009;
require("./models/userSchema.js")


// app.get("/", (req, res)=>{
//     res.status(201).json("Server Created")
// });

app.use(express.json());
app.use(cors())
app.use(router);

app.listen(port, ()=>{
    console.log(`Server is start on port ${port}`)
})
