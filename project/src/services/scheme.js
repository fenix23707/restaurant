const schemeRepository = require('../repository/scheme');
const tableService = require('../services/table');
const constants = require('../constants')

class SchemeService {
    async findByRestaurantId(restaurantId) {
        return await schemeRepository.findByRestaurantId(restaurantId);
    }

    async create(schemeData) {
        //TODO: add transaction
        const tables = schemeData.tables;
        const scheme = await schemeRepository.create(schemeData);

        tables.forEach(table => {
            table.scheme_id = scheme.id;
        });
        await tableService.createMany(tables);

        return scheme;
    }
}

module.exports = new SchemeService();