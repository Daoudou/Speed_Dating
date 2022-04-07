const {Sequelize, DataTypes, Model} = require('sequelize')
const { sequelize } = require('./db')
const Dating = require('./dating.model')

const User = sequelize.define('User',{
    id:{
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
    pseudo:{
        type: DataTypes.STRING,
        allowNull: false
    },
    email:{
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    sexe: {
        type: DataTypes.STRING,
        allowNull: false
    },
    birthdate: {
        type: DataTypes.DATE,
        allowNull: false
    },
    roles:{
        type:DataTypes.STRING,
        allowNull: false
    },
})

User.hasMany(Dating)
Dating.belongsTo(User)

module.exports = User