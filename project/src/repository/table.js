const Table = require('../models/table');
const constants = require("../constants");
const Op = require("sequelize").Op;

class TableRepository {
     async findById(id) {
        return await Table.findByPk(id);
    }

    async createMany(tablesData) {
        return await Table.bulkCreate(tablesData);
    }
}

module.exports = new TableRepository();