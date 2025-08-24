const db = require('../utils/db-connection');
const studentModal = require('../models/student');

const addStudentData = (async (req, res) => {
    try {
        const { name, email, age } = req.body;
        const response = await studentModal.create({
            name: name,
            email: email,
            age: age
        })
        res.status(200).send(response);
    } catch (err) {
        res.status(500).send(err.message);
    }


    // const addStudentDataQuery = `INSERT INTO students (name,email,age) VALUES (?,?,?)`;
    // db.execute(addStudentDataQuery,[name,email,age],(err)=>{
    //     if(err){
    //         res.status(500).send(err.message);
    //         db.end();
    //         return;
    //     }
    //    
    // })
})

const updateStudentData = (async (req, res) => {

    // try {
    //     const { id } = req.params;
    //     const { name, email } = req.body;
    //     const student = await studentModal.findByPk(id);
    //     if (!student) {
    //         res.status(404).send("user not found");
    //     }
    //     student.name = name;
    //     student.email = email;
    //     await student.save();
    //     res.status(200).send("user has been updated");

    // } catch (er) {
    //     res.status(500).send("user cannot be updated");
    // }


    // const updateStudentDataQuery = `UPDATE students SET name=?,email=? WHERE id = ${id}`;
    // db.execute(updateStudentDataQuery, [name, email], (err, result) => {
    //     if (err) {
    //         res.status(500).send(err.message);
    //         db.end();
    //         return;
    //     }
    //     if (result.affectedRows === 0) {
    //         res.status(404).send("user not found");
    //     }
    //     res.status(200).send("student updated successfully");
    // })
})

const getStudentData = (async (req, res) => {

    // try {
    //     const student = await studentModal.findAll();
    //     if (!student) {
    //         res.status(404).send("student not found");
    //     }
    //     res.status(200).json(student);
    // } catch (err) {
    //     res.status(500).send("error occurred while getting data");
    // }
    // const getStudentDataQuery = `SELECT * FROM students`;
    // db.execute(getStudentDataQuery, (err, result) => {
    //     if (err) {
    //         res.status(500).send(err.message);
    //         db.end();
    //         return;
    //     }
    //     res.status(200).send(JSON.stringify(result));
    // })
})

const getStudentDataById = (async (req, res) => {

    // try {
    //     const { id } = req.params;
    //     const student = await studentModal.findByPk(id);
    //     if (!student) {
    //         res.status(404).send("user not found");
    //     }
    //     res.status(200).json(student)
    // } catch (err) {
    //     res.status(500).send("error encountered while fetching");
    // }

    // const getStudentDataQuery = `SELECT * FROM students WHERE id = ${id}`;
    // db.execute(getStudentDataQuery, (err, result) => {
    //     if (err) {
    //         res.status(500).send(err.message);
    //         db.end();
    //         return;
    //     }
    //     res.status(200).send(JSON.stringify(result));
    // })
})

const deleteStudentDataById = (async (req, res) => {

    // try {
    //     const { id } = req.params;
    //     const student = await studentModal.destroy({
    //         where: {
    //             id: id
    //         }
    //     })
    //     if (!student) {
    //         res.status(404).send("user is not found");
    //     }
    //     res.status(200).send("user is deleted");
    // } catch (err) {
    //     res.status(500).send("error encounter during deleting!");
    // }

    // const deleteStudentDataByIdQuery = `DELETE FROM students WHERE id = ${id}`;
    // db.execute(deleteStudentDataByIdQuery, (err, result) => {
    //     if (err) {
    //         res.status(500).send(err.message);
    //         db.end();
    //         return;
    //     }
    //     if (result.affectedRows === 0) {
    //         res.status(404).send("student not found");
    //     }
    //     res.status(200).send('data deleted successfully');
    // })
})


module.exports = {
    addStudentData,
    updateStudentData,
    getStudentData,
    getStudentDataById,
    deleteStudentDataById
}