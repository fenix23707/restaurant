const User = require('./user');
const UserInfo = require("./userinfo");
const Restaurant = require("./restaurant");
const Scheme = require("./scheme");
const Table = require("./table");
const TableReservation = require("./tableReservation");
const Review = require("./review");

User.hasMany(Restaurant, {foreignKey: "user_id"});

UserInfo.belongsTo(User, {foreignKey: "user_id", onDelete: "CASCADE"});

Scheme.belongsTo(Restaurant, {foreignKey: "restaurant_id"});

Table.belongsTo(Scheme, {foreignKey: "scheme_id"});

TableReservation.belongsTo(User, {foreignKey: "user_id"});
TableReservation.belongsTo(Table, {foreignKey: "table_id"});

Review.belongsTo(User, {foreignKey: "user_id"});
Review.belongsTo(Restaurant, {foreignKey: "restaurant_id"});