const dotenv = require('dotenv');

dotenv.config();

module.exports = {
    app: {
        port: parseInt(process.env.APP_PORT, 10) || 2001,
    },

    mongo: {
        port: parseInt(process.env.MONGO_PORT, 10) || 27017,
        user: parseInt(process.env.MONGO_USER, 10) || "user",
        pass: parseInt(process.env.MONGO_PASS, 10) || "pass"
    }
}
