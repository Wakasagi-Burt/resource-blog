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
    sequelize
}
);

module.exports = User;


