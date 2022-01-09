const express = require('express')
const authController = require('../controllers/auth');
const validate = require("../middleware/validate");
const UserScheme = require("../schemes/user");

const router = express.Router();

/**
 * @swagger:
 * tags:
 *   name: SignUp
 *   description: The signup managing api
 */

/**
 * @swagger:
 * /signup:
 *   post:
 *     summary: Create a new user
 *     tags: [SignUp]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             properties:
 *               login:
 *                 type: string
 *                 description: User login. Must be unique
 *               password:
 *                 type: string
 *                 description: Password must be min 4 symbols
 *             example:
 *               login: fenix23707
 *               password: qwerty
 *     responses:
 *       201:
 *         description: The user was successfully created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       409:
 *         description: The login already exist
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *       422:
 *         description: body is not valid
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 */
router.post('/', validate(UserScheme.create), authController.signup);

module.exports = router;