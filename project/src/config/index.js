const dotenv = require('dotenv');

dotenv.config();

module.exports = {
    app: {
        port: parseInt(process.env.APP_PORT, 10) || 2001,
    },

    mongo: {
        host: process.env.MONGO_HOST || 'localhost',
        port: parseInt(process.env.MONGO_PORT, 10) || 1999,
        user: process.env.MONGO_USER || 'user',
        pass: process.env.MONGO_PASS || 'pass',
        dbName: process.env.MONGO_DB_NAME || 'restaurant_logs',
    }

}
