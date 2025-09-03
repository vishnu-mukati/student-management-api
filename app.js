const express = require('express');
const studentRouter = require('./routes/studentRoute');
const courseRouter = require('./routes/courseRoute');
const db = require('./utils/db-connection');

// Import models
const models = require('./models');

const app = express();

app.use(express.json());



app.use('/students', studentRouter);
app.use('/courses', courseRouter);

db.sync({ force: true }).then(() => {
    app.listen(3000, (err) => {
        console.log("server is running");
    })
}).catch((err) => {
    console.log(err);
})

