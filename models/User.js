const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');

class User extends Model {}

User.init(
{
id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
},
username: {
    type: DataTypes.STRING,
    allowNull: false,

},
password: {
    type: DataTypes.STRING,
    allowNull: false,
}
,
email: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
        isEmail: true,
    },
},

},
{
<<<<<<< HEAD
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
=======
    sequelize, 
    timestamps: false,
    freezeTableName: true,
>>>>>>> ac4116ed1889598526bf75b843f16f93a37381c0
    modelName: 'user',
}
);

module.exports = User;



