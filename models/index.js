const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');

User.hasMany(Post, {
    foreinKey: 'user_id'
});

Post.belongsTo(User, {
    foreinKey: 'user_id'
});

Comment.belongsTo(User, {
    foreinKey: 'user_id'
});

Comment.belongsTo(Post, {
    foreinKey: 'post_id'
});

User.hasMany(Comment, {
    foreinKey: 'user_id'
});

Post.hasMany(Comment, {
    foreinKey: 'post_id'
});

module.exports = { User, Post, Comment };