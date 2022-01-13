const Sequelize = require("sequelize");
const config = require("../config/sequelize");

const sequelize = new Sequelize("restaurant_reservations", "postgres", "vlad", config);

module.exports = sequelize;

// // test
// sequelize.authenticate()
// .then(()=> console.log('connection has been established successful'))