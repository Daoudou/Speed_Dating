const {Sequelize, DataTypes, Model} = require('sequelize')
const { sequelize } = require('./db')
const User = require('./user.model')


const Infos = sequelize.define('Infos',{
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
    sexe: {
        type: DataTypes.STRING,
        allowNull: false
    },
    birthdate: {
        type: DataTypes.DATE,
        allowNull: false
    },
}, {tableName: 'infos'})

User.hasOne(Infos);
Infos.belongsTo(User);

module.exports = Infos