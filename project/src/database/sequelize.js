const Sequelize = require("sequelize");
const config = require("../config/sequelize").config;
const postgres = require("../config/sequelize").postgres;

const sequelize = new Sequelize(postgres.db, postgres.user , postgres.password, config);

module.exports = sequelize;

// // test
// sequelize.authenticate()
// .then(()=> console.log('connection has been established successful'))
