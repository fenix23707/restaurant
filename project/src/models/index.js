const User = require('./user');
const UserInfo = require("./userinfo");

User.hasOne(UserInfo, {foreignKey: "user_id", onDelete: "CASCADE"});
