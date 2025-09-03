const express = require('express');
const studentController = require('../controllers/studentController');


const router = express.Router();

router.post('/',studentController.addStudentData);
router.put('/:id',studentController.updateStudentData);
router.get('/',studentController.getStudentData);
router.get('/:id',studentController.getStudentDataById);
router.delete('/:id',studentController.deleteStudentDataById);
router.post('/addingStudentWithCard',studentController.addingValuesToStudentAndIdentityTable);


module.exports = router;