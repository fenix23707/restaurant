const express = require('express')
const authController = require('../controllers/auth');

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
router.post('/', authController.signup);

module.exports = router;