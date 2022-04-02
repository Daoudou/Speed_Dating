const {Sequelize, DataTypes, Model} = require('sequelize')
const { sequelize } = require('./db')
const {UserMode} = require('./user.model')

class User extends Model {}

User.init({
    id:{
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },
    bar_id:{
      type: DataTypes.INTEGER,
      references:{
          model: UserMode,
          key: 'id'
      }
    },
    uniqueName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    originalName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    path: {
        type: DataTypes.STRING,
        allowNull: false
    },
    mimiType: {
        type: DataTypes.STRING,
        allowNull: false
    },
    size: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
},{
    sequelize
})