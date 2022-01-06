const express = require('express')
const userController = require('../controllers/user');

const router = express.Router();

/**
 * @swagger:
 * tags:
 *   name: Users
 *   description: The users managing api
 */

/**
 * @swagger:
 * /users:
 *   get:
 *     summary: Returns list of users
 *     tags: [Users]
 *     responses:
 *       200:
 *         description: The list of users
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/User'
 */
router.get('/', userController.list);

/**
 * @swagger:
 * /users/{id}:
 *   get:
 *     summary: Get the user by it's id
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: id
 *         scheme:
 *           type: integer
 *         required: true
 *         description: the user id
 *     responses:
 *       200:
 *         description: Ok
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 */
router.get('/:id', userController.searchById);

/**
 * @swagger:
 * /users:
 *   post:
 *     summary: Create a new user
 *     tags: [Users]
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
 */
router.post('/', userController.create);

module.exports = router;