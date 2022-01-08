const Table = require('../models/table');
const constants = require("../constants");
const Op = require("sequelize").Op;

class TableRepository {
     async findById(id) {
        return await Table.findByPk(id);
    }
}

module.exports = new TableRepository();