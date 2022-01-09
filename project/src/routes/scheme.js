const express = require('express')
const schemeController = require('../controllers/scheme');

const router = express.Router();

/**
 * @swagger:
 * tags:
 *   name: Scheme
 *   description: The schemes managing api
 */

/**
 * @swagger:
 * /schemes/restaurants/{id}:
 *   get:
 *     summary: Get scheme by restaurant id
 *     tags: [Scheme]
 *     parameters:
 *       - in: path
 *         name: id
 *         scheme:
 *           type: integer
 *         required: true
 *         description: the restaurant id
 *     responses:
 *       200:
 *         description: Ok
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Scheme'
 */
router.get('/restaurants/:id', schemeController.findByRestaurantId);

module.exports = router;