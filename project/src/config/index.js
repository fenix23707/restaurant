const dotenv = require('dotenv');

dotenv.config();

module.exports = {
    app: {
        port: parseInt(process.env.APP_PORT, 10) || 2001,
        mongoPort: parseInt(process.env.MONGO_PORT, 10) || 27017,
    }
}