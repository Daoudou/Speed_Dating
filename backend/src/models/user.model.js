const {Sequelize, DataTypes, Model} = require('sequelize')
const { sequelize } = require('./db')

class User extends Model {}

User.init({
    id:{
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
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
    }
}, {
    sequelize
})

module.exports = User