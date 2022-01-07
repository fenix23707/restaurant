const User = require('./user');
const UserInfo = require("./userinfo");
const Restaurant = require("./restaurant");
const Scheme = require("./scheme");
const Table = require("./table");

User.hasMany(Restaurant, {foreignKey: "user_id"});

UserInfo.belongsTo(User, {foreignKey: "user_id", onDelete: "CASCADE"});

Scheme.belongsTo(Restaurant, {foreignKey: "restaurant_id"});

Table.belongsTo(Scheme, {foreignKey: "scheme_id"});

