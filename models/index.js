const student = require('./student');
const  identityCard = require('./identityCard');
const department = require('./department');

// one to one 

student.hasOne(identityCard);
identityCard.belongsTo(student);

// one to many

department.hasMany(student);
student.belongsTo(department);

module.exports = {
    student,
    identityCard,
    department
}