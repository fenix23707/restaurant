const schemeRepository = require('../repository/scheme');
const constants = require('../constants')

class SchemeService {
    async create(schemeData) {
        return await schemeRepository.create(schemeData);
    }
}

module.exports = new SchemeService();