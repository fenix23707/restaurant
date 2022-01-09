const schemeService = require('../services/scheme');
const Response = require("../utils/response");
const constants = require("../constants");

const Op = require("sequelize").Op;


class SchemeController {
    async findByRestaurantId(req, res, next) {
        const restaurantId = req.params.id;
        try {
            res.json(await schemeService.findByRestaurantId(restaurantId));
        } catch (err) {
            return next(err);
        }
    }
}

module.exports = new SchemeController();