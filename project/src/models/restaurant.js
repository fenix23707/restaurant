const Sequelize = require("sequelize");
const sequelize = require("../database/sequelize");

/**
 * @swagger:
 * components:
 *   schemas:
 *      Restaurant:
 *        type: object
 *        required:
 *          - name
 *          - adres
 *        properties:
 *          id:
 *            type: integer
 *            description: The auto-generated id of restaurant
 *          name:
 *            type: string
 *            description: The name of restaurant. Should be unique.
 *          adres:
 *            type: string
 *            description: The adres of restaurant.
 *          avatar:
 *            type: string
 *            description: The avatar of restaurant.
 *          user_id:
 *            type: integer
 *            description: The id of restaurant owner.
 *        example:
 *          id: 1
 *          name: ResTop
 *          adres: Belarus, Vitebsk, Moskovskiy Prospekt, 33
 *          avatar: restaurant/img/1/ava.png
 *          user_id: 2
 */
const Restaurant = sequelize.define("restaurant", {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    },
    adres: {
        type: Sequelize.STRING,
    },
    avatar: {
        type: Sequelize.STRING,
    },
    user_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
    }
});

module.exports = Restaurant;