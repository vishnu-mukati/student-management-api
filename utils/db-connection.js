const mysql = require('mysql2');

const connection = mysql.createConnection({
    host : "localhost",
    user : "root",
    password : "0101",
    database : "management",
})


connection.connect((err)=>{
    if(err){
        console.log(err);
        return;
    }

    console.log("connection has been created");

    const creationQuery =  `CREATE TABLE IF NOT EXISTS students (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(50) NOT NULL,
        email VARCHAR(20) UNIQUE NOT NULL,
       age INT NOT NULL
    )`

    connection.execute(creationQuery,(err)=>{
        if(err){
            console.log(err);
            connection.end();
            return;
        }
        console.log('table is created');
    })
})

module.exports = connection;