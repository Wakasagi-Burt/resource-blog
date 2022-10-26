const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');

class Post extends Model {}

Post.init(
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
postdate: {
    type: DataTypes.DATE,
    allowNull: false,
}
,
title: {
    type: DataTypes.STRING,
    allowNull: false,},
content: {
type: DataTypes.TEXT,
allowNull: false,
},
user_id: {
type: DataTypes.INTEGER,
references: {
model: 'User',
key: 'id',
as: user_id,
},
onDelete: 'CASCADE'
}

},
{
    sequelize,
    timestamps: true,
}
);

module.exports = Post;