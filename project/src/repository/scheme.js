const Scheme = require('../models/scheme');

class SchemeRepository {
    async findById(id) {
        return await Scheme.findByPk(id);
    }

    async create(schemeData) {
        return await Scheme.create(schemeData);
    }
}

module.exports = new SchemeRepository();