const {Sequelize,DataTypes} =  require('sequelize');
const sequelize  = require('../utils/db-connection');


const identityCard = sequelize.define('identityCard',{
    id:{
        type : DataTypes.INTEGER,
        primaryKey : true,
        autoIncrement : true
    },
    cardNo:{
        type : DataTypes.STRING,
        allowNull : false,
        unique : true,
    },
})

module.exports = identityCard;