const express = require('express');
const studentRouter = require('./routes/studentRoute');
const app = express();

app.use(express.json());

app.use('/students',studentRouter);


app.listen(3000,(err)=>{
    console.log("server is running");
})