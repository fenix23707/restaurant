const dotenv = require('dotenv');

dotenv.config();

module.exports = {
    app: {
        port: parseInt(process.env.APP_PORT, 10) || 2000,
        rabbitURL: process.env.RABBIT_URL || 'amqp://localhost'
    },
    email: {
        login: process.env.EMAIL_LOGIN,
        pass: process.env.EMAIL_PASS
    }
};
