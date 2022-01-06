const express = require('express');
const loader = require('./loader');
const swaggerUi = require("swagger-ui-express");
const swaggerJsDoc = require("swagger-jsdoc");
const options = require("./config/swagger");
const db = require('./database');
const port = require('./config').app.port;

// swagger
const spec = swaggerJsDoc(options);

const app = express();

app.use(loader);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(spec));

async function start() {
    app.listen(port, () => console.log(`Server started at port ${port}`));
}

start();

module.exports = app;