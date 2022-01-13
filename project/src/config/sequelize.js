const mongoLogger = require("../utils/mongoLogger");

module.exports = {
    dialect: "postgres",
    host: "localhost",
    define: {timestamps: false},
    logging: mongoLogger.dbOperations,
}