const TableReservation = require('../models/tableReservation');
const constants = require("../constants");
const Restaurant = require("../models/restaurant");
const Op = require("sequelize").Op;

class TableReservationRepository {
    async findAllByUserId(userId, sort, pagination) {
        return await TableReservation.findAll({
            where: {user_id: userId},
            order: sort,
            offset: pagination.offset,
            limit: pagination.limit,
        });
    }

    async findAllByTableId(tableId) {
        return await TableReservation.findAll({where: {table_id: tableId}});
    }

    async findAllBookedByTableIdAndReservationTime(tableId, startTime, endTime) {
        return await TableReservation.findOne({
            where: {
                [Op.and]: [
                    {
                        [Op.or]: [
                            {datetime_begin: {[Op.between]: [startTime, endTime]}},
                            {datetime_end: {[Op.between]: [startTime, endTime]}},
                        ]
                    },
                    {table_id: tableId},
                    {status: constants.bookedReservationStatusNum}
                ]
            }
        });
    }

    async findById(id) {
        return await TableReservation.findByPk(id);
    }

    async create(reservationData) {
        return await TableReservation.create(reservationData);
    }

    async update(id, reservationData) {
        return await TableReservation.update(reservationData, {where: {id: id}});
    }
}

module.exports = new TableReservationRepository();