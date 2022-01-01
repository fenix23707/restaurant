const Express = require("./express");
const Routing = require("./routing");

const express = require('express');
const router = express.Router();

router.use(Routing);
router.use(Express);

module.exports = router;