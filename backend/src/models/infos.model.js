const {Sequelize, DataTypes, Model} = require('sequelize')
const { sequelize } = require('./db')
const User = require('../models/user.model')
const Dating = require('../models/dating.model')

const Infos = sequelize.define('Info',{
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },
    firstName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    sexe: {
        type: DataTypes.STRING,
        allowNull: false
    },
})

Infos.hasOne(Dating)

module.exports = Infos
