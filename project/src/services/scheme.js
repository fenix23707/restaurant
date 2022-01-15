const schemeRepository = require('../repository/scheme');
const restaurantService = require('../services/restaurant');
const NotFoundError = require("../errors/NotFoundError");
const ForbiddenError = require("../errors/ForbiddenError");

class SchemeService {
    async findById(id) {
        return await schemeRepository.findById(id);
    }

    async findByRestaurantId(restaurantId) {
        return await schemeRepository.findByRestaurantId(restaurantId);
    }

    async create(schemeData) {
        return await schemeRepository.create(schemeData);
    }

    async update(id, schemeData, userId) {
        await this.checkSchemeExist(id);
        await this.checkUserHaveAccess(id, userId);
        return await schemeRepository.update(id, schemeData);
    }

    async checkSchemeExist(id) {
        const scheme = schemeRepository.findById(id);
        if (!scheme) {
            throw new NotFoundError(`Scheme with id = ${id} not found`);
        }
    }

    async checkUserHaveAccess(schemeId, userId) {
        const scheme = await schemeRepository.findById(schemeId);
        const restaurant = await restaurantService.findById(scheme.restaurant_id);
        if (restaurant.user_id !== userId) {
            throw new ForbiddenError(`User with id = ${userId} doesn't have access`);
        }
    }
}

module.exports = new SchemeService();