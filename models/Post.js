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
model: 'user',
key: 'id',
},
}

},
{
    sequelize,
<<<<<<< HEAD
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'post',
=======
    freezeTableName: true,
    timestamps: false,
    modelName: 'post',
    
>>>>>>> ac4116ed1889598526bf75b843f16f93a37381c0
}
);

module.exports = Post;