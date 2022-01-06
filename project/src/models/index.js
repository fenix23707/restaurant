const User = require('./user');
const UserInfo = require("./userinfo");
const Restaurant = require("./restaurant");
const Scheme = require("./scheme");
const Table = require("./table");

User.hasOne(UserInfo, {foreignKey: "user_id", onDelete: "CASCADE"});

Restaurant.hasOne(User, {foreignKey: "user_id"});

Scheme.BelongsTo(Restaurant, {foreignKey: "restaurant_id"});

Table.BelongsTo(Scheme, {foreignKey: "scheme_id"});

