const errorHandler = require("../middleware/errorHandler");
const errorConsoleLogger = require("../middleware/errorConsoleLogger");
const express = require('express');
const router = express.Router();

const usersRouter = require("../routes/user");
const signupRouter = require("../routes/signup");
const userInfoRouter = require("../routes/userinfo");

router.use('/signup', signupRouter);
router.use('/users', usersRouter);
router.use('/userinfo', userInfoRouter);

router.use(errorConsoleLogger);
router.use(errorHandler);

module.exports = router;