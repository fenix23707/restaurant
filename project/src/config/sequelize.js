const mongoLogger = require("../utils/mongoLogger");

module.exports = {
    postgres: {
      password: 'admin',
      user: 'admin',
      db: 'restaurant_reservations'
    },
    config: {
        dialect: "postgres",
        host: process.env.POSTGRES_SERVICE_HOST || "postgres",
        define: {timestamps: false},
        logging: mongoLogger.dbOperations,
    }

}
