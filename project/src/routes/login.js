const express = require('express')
const authController = require('../controllers/auth');

const router = express.Router();

/**
 * @swagger:
 * tags:
 *   name: Login
 *   description: The login managing api
 */

/**
 * @swagger:
 * /login:
 *   post:
 *     summary: Create a new user
 *     tags: [Login]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *     responses:
 *       201:
 *         description: The user was successfully created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       409:
 *         description: The login already exist
 */
router.post('/', authController.login);

module.exports = router;