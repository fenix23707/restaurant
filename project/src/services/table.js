const tableRepository = require('../repository/table');

class TableService {
    async findById(id) {
        return await tableRepository.findById(id);
    }
}

module.exports = new TableService();