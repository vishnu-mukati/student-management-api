const {Sequelize,DataTypes} =  require('sequelize');
const sequelize  = require('../utils/db-connection');


const Student = sequelize.define('student',{
    id:{
        type : DataTypes.INTEGER,
        primaryKey : true,
        allowNull : false,
        autoIncrement : true
    },
    name:{
        type : DataTypes.STRING,
        allowNull : false,
    },
    email : {
        type : DataTypes.STRING,
        allowNull:false
    },
    age:{
        type:DataTypes.INTEGER,
        allowNull:false
    }
})

module.exports = Student;