const amqp = require('amqplib');
const emailService = require("./services/email");
const express = require("express");
const port = require('./config').app.port;

const app = express();
app.use('/', require('./routes/healthchecker'));

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

    app.listen(port, () => console.log(`Server started at port ${port}`));
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
