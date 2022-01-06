const express = require('express')
const userInfoController = require('../controllers/userinfo');

const router = express.Router();


/**
 * @swagger:
 * tags:
 *   name: UserInfo
 *   description: The user info managing api
 */

/**
 * @swagger:
 * /userinfo/{id}:
 *   get:
 *     summary: Get the user info by it's id
 *     tags: [UserInfo]
 *     parameters:
 *       - in: path
 *         name: id
 *         scheme:
 *           type: integer
 *         required: true
 *         description: the user info id
 *     responses:
 *       200:
 *         description: Ok
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/UserInfo'
 */
router.get('/:id', userInfoController.searchById);

/**
 * @swagger:
 * /userinfo/users/{id}:
 *   get:
 *     summary: Get the user info by user's id
 *     tags: [UserInfo]
 *     parameters:
 *       - in: path
 *         name: id
 *         scheme:
 *           type: integer
 *         required: true
 *         description: the user's id
 *     responses:
 *       200:
 *         description: Ok
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/UserInfo'
 */
router.get('/users/:id', userInfoController.searchById);

/**
 * @swagger:
 * /userinfo/{id}:
 *   put:
 *     summary: Update the user info
 *     tags: [UserInfo]
 *     parameters:
 *       - in: path
 *         name: id
 *         scheme:
 *           type: integer
 *         required: true
 *         description: the user info id
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/UserInfo'
 *     responses:
 *       200:
 *         description: The user was successfully updated
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Response'
 *       404:
 *         description: User info with id not found
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 */
router.put('/:id', userInfoController.update);

module.exports = router;