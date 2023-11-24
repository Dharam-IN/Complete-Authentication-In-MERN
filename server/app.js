const express = require('express');
const app = express();
const port = 8009;

app.get("/", (req, res)=>{
    res.status(201).json("Server Created")
});

app.listen(port, ()=>{
    console.log(`Server is start on port ${port}`)
})
