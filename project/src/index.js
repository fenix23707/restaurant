const express = require('express');
const loader = require('./loader');
const db = require('./database');
const port = require('./config').app.port;
const app = express();

app.use(loader);

async function start() {
    app.listen(port, () => console.log(`Server started at port ${port}`));
}

start();

module.exports = app;