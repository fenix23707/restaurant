const dotenv = require('dotenv');

dotenv.config();

module.exports = {
    app: {
        port: parseInt(process.env.APP_PORT, 10) || 2001,

    }
}