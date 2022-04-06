const {Sequelize, DataTypes, Model} = require('sequelize')
const { sequelize } = require('./db')
const User = require('../models/user.model')
const Infos = require('../models/infos.model')


const Dating = sequelize.define('Dating',{
    id:{
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },
    idUser: {
        type: DataTypes.UUID,
        foreignKey: true,
        references:{
            model : User,
            key : 'id'
        }
    },
    idInfo:{
        type: DataTypes.UUID,
        foreignKey: true,
        references:{
            model : User,
            key : 'id'
        }
    },
    dateDating:{
        type: DataTypes.DATE,
        allowNull: false
    },
    comment:{
        type:DataTypes.STRING,
        allowNull: true
    },
    note:{
        type:DataTypes.INTEGER,
        allowNull: false
    },
})


module.exports = Dating