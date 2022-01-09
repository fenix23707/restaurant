const schemeRepository = require('../repository/scheme');
const NotFoundError = require("../errors/NotFoundError");

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

    async update(id, schemeData) {
        await this.checkSchemeExist(id);
        return await schemeRepository.update(id, schemeData);
    }

    async checkSchemeExist(id) {
        const scheme = schemeRepository.findById(id);
        if (!scheme) {
            throw new NotFoundError(`Scheme with id = ${id} not found`);
        }
    }
}

module.exports = new SchemeService();