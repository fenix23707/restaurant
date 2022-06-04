const mongoLogger = require("../utils/mongoLogger");

module.exports = {
    postgres: {
      password: 'admin',
      user: 'admin',
      db: 'restaurant_reservations'
    },
    config: {
        dialect: "postgres",
        host: "localhost",
        define: {timestamps: false},
        logging: mongoLogger.dbOperations,
    }

}
