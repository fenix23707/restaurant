const Scheme = require('../models/scheme');
const Table = require('../models/table');

class SchemeRepository {
    async findByRestaurantId(restaurantId) {
        return await Scheme.findOne({
            where: {restaurant_id: restaurantId},
            include: [{
                model: Table,
                attributes: {exclude: ['scheme_id']},
                required: false
            }]
        });
    }

    async findById(id) {
        return await Scheme.findByPk(id);
    }

    async create(schemeData) {
        return await Scheme.create(schemeData);
    }
}

module.exports = new SchemeRepository();