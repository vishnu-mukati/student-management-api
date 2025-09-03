const Course = require('../models/courses');

const addCourse = async (req, res) => {
    try {
        const { name } = req.body;
        const course = await Course.create({ name: name });
        res.status(201).json(course);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

module.exports = {
    addCourse
}