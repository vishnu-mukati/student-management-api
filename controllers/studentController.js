const db = require('../utils/db-connection');

const addStudentData = ((req,res)=>{
  const {name,email,age} = req.body;
    const addStudentDataQuery = `INSERT INTO students (name,email,age) VALUES (?,?,?)`;

    db.execute(addStudentDataQuery,[name,email,age],(err)=>{
        if(err){
            res.status(500).send(err.message);
            db.end();
            return;
        }
       res.status(200).send("data inserted successfully");
    })
})

const updateStudentData = ((req,res)=>{
    const {id} = req.params;
    const {name,email} = req.body;
    const updateStudentDataQuery = `UPDATE students SET name=?,email=? WHERE id = ${id}`;
    db.execute(updateStudentDataQuery,[name,email],(err,result)=>{
        if(err){
            res.status(500).send(err.message);
            db.end();
            return;
        }
        if(result.affectedRows ===0){
            res.status(404).send("user not found");
        }
        res.status(200).send("student updated successfully");
    })
})

const getStudentData = ((req,res)=>{
    const getStudentDataQuery =`SELECT * FROM students`;
    db.execute(getStudentDataQuery,(err,result)=>{
        if(err){
            res.status(500).send(err.message);
            db.end();
            return;
        }
        res.status(200).send(JSON.stringify(result));
    })
})

const getStudentDataById = ((req,res)=>{
    const {id} = req.params;
    const getStudentDataQuery =`SELECT * FROM students WHERE id = ${id}`;
    db.execute(getStudentDataQuery,(err,result)=>{
        if(err){
            res.status(500).send(err.message);
            db.end();
            return;
        }
        res.status(200).send(JSON.stringify(result));
    })
})

const deleteStudentDataById = ((req,res)=>{
    const {id} = req.params;
    const deleteStudentDataByIdQuery = `DELETE FROM students WHERE id = ${id}`;
    db.execute(deleteStudentDataByIdQuery,(err,result)=>{
        if(err){
            res.status(500).send(err.message);
            db.end();
            return;
        }
        if(result.affectedRows===0){
            res.status(404).send("student not found");
        }
        res.status(200).send('data deleted successfully');
    })
})


module.exports = {
    addStudentData,
    updateStudentData,
    getStudentData,
    getStudentDataById,
    deleteStudentDataById
}