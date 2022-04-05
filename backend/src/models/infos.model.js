const {Sequelize, DataTypes, Model} = require('sequelize')
const { sequelize } = require('./db')
const User = require('../models/user.model')

const Infos = sequelize.define('Info',{
    idInfos: {
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
    birthdate:{
        type: DataTypes.DATE,
        allowNull: false
    }
})

User.hasOne(Infos)
Infos.belongsTo(User)
module.exports = Infos
