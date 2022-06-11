const mongoLogger = require("../utils/mongoLogger");

module.exports = {
    postgres: {
      user: 'postgres',
      password: 'vlad',
      db: 'restaurant_reservations'
    },
    config: {
        dialect: "postgres",
        host: process.env.POSTGRES_SERVICE_HOST || "localhost",
        define: {timestamps: false},
        logging: mongoLogger.dbOperations,
    }

}
