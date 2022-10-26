const User = require('./User');
const Post = require('./Post');
const Video = require('./Video');

User.hasMany(Post, { onDelete: 'CASCADE'});

Post.belongsTo(User, { foreignKey: user_id});