const tableRepository = require('../repository/table');

class TableService {
    async findById(id) {
        return await tableRepository.findById(id);
    }

    async createMany(tablesData) {
        return await tableRepository.createMany(tablesData);
    }
}

module.exports = new TableService();