const Restaurant = require('../models/restaurant');

class RestaurantRepository {
    async findAll(match, sort, pagination) {
        return await Restaurant.findAll({
            where: match,
            order: sort,
            offset: pagination.offset,
            limit: pagination.limit,
        });
    }

    async findByUserId(id) {
        return await Restaurant.findAll({where: {user_id: id}});
    }

    async findById(id) {
        return await Restaurant.findByPk(id);
    }

    async findByName(name) {
        return await Restaurant.findOne({where: {name: name}});
    }

    async create(restaurantData) {
        return await Restaurant.create(restaurantData);
    }

    async update(id, restaurantData) {
        return await Restaurant.update(restaurantData, {where: {id: id}});
    }

    async delete(id) {
        return await Restaurant.destroy({where: {id: id}});
    }
}

module.exports = new RestaurantRepository();