const nodemailer = require("nodemailer");
const config = require("../config");
class EmailService {
    sendMessage(email, subject, message) {
        const mailTransport = this.getMailTransport();
        mailTransport.sendMail({
            from: 'ResTop',
            to: email,
            subject: subject,
            text: message,
        });

    }

    getMailTransport() {
        return nodemailer.createTransport({
            service: 'gmail',
            secure: false,
            port: 25,
            auth: { user: config.email.login, pass: config.email.pass },
            tls: {rejectUnauthorized: false}
        });
    }
}


module.exports = new EmailService();
