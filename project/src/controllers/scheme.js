const schemeService = require('../services/scheme');
const Response = require("../utils/response");



class SchemeController {
    async findById(req, res, next) {
        const id = req.params.id;
        try {
            res.json(await schemeService.findById(id));
        } catch (err) {
            return next(err);
        }
    }

    async findByRestaurantId(req, res, next) {
        const restaurantId = req.params.id;
        try {
            res.json(await schemeService.findByRestaurantId(restaurantId));
        } catch (err) {
            return next(err);
        }
    }

    async update(req, res, next) {
        const id = req.params.id;
        const schemeData = req.body;
        try {
            await schemeService.update(id, schemeData);
            res.json(new Response("Scheme was successfully updated"));
        } catch (err) {
            return next(err);
        }
    }
}

module.exports = new SchemeController();