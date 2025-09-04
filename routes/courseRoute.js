const express = require('express');
const courseController = require('../controllers/courseController');

const router = express.Router();

router.post('/', courseController.addCourse);
router.post('/addStudentCourse', courseController.addStudentToCourses);
module.exports = router;