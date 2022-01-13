const amqp = require('amqplib');
const emailService = require("./services/email");

const url = 'amqp://localhost';
const queue = 'email-service';

async function start() {
    try {
        const connection = await amqp.connect(url);
        const channel = await connection.createChannel();
        channel.assertQueue(queue, {
            durable: false
        });
        channel.consume(queue, onMessage, {noAck: true});
    } catch (err) {
        console.error(err);
    }
}

function onMessage(msg) {
    try {
        const data = JSON.parse(msg.content);
        console.log(data);
        emailService.sendMessage(data.email, data.subject, data.message);
    } catch (err) {
        console.error(err);
    }
}

start()
