const restaurantService = require('../services/restaurant');
const userInfoService = require("../services/userinfo");
const Response = require("../utils/response");
const constants = require("../constants");

const Op = require("sequelize").Op;


class RestaurantController {
    async search(req, res, next) {
        const match = {};
        if (req.query.name) {
            match.name = {[Op.iLike]: `%${req.query.name}%`};
        }
        if (req.query.adres) {
            match.adres = {[Op.iLike]: `%${req.query.adres}%`};
        }

        const sort = [];
        if (req.query.sortBy) {
            sort.push([
                req.query.sortBy,
                req.query.order === 'desc' ? 'DESC' : 'ASC'
            ]);
        }

        const pagination = {};
        let pageSize = constants.pageSize;
        if (req.query.pageSize) {
            pageSize = parseInt(req.query.pageSize, 10);
        }
        if (req.query.pageNum) {
            pagination.offset = pageSize * (parseInt(req.query.pageNum, 10) - 1);
            pagination.limit = pageSize;
        }

        try {
            res.json(await restaurantService.findAll(match, sort, pagination));
        } catch (err) {
            return next(err);
        }
    }

    async searchById(req, res, next) {
        try {
            let id = null;
            if (req.params.id) {
                id = req.params.id;
            }
            res.json(await restaurantService.findById(id));
        } catch (err) {
            return next(err);
        }
    }

    async searchByUserId(req, res, next) {
        try {
            let userId = null;
            if (req.params.id) {
                userId = req.params.id;
            }
            res.json(await restaurantService.findByUserId(userId));
        } catch (err) {
            return next(err);
        }
    }


    async create(req, res, next) {
        try {
            const restaurantData = req.body;
            let restaurant = await restaurantService.create(restaurantData);
            res.status(201).json(restaurant);
        } catch (err) {
            return next(err);
        }
    }

    async update(req, res, next) {
        try {
            const id = req.params.id;
            const restaurantData = req.body;
            await restaurantService.update(id, restaurantData)
            res.json(res.json(new Response("Update successful", 200)));
        } catch (err) {
            return next(err);
        }
    }

    async delete(req, res, next) {

    }
}

module.exports = new RestaurantController();