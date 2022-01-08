const tableReservationRepository = require('../repository/tableReservation');
const tableService = require('../services/table');
const ConflictError = require("../errors/ConflictError");
const NotFoundError = require("../errors/NotFoundError");

class TableReservationService {
    async findAllByUserId(userId, sort, pagination) {
        return await tableReservationRepository.findAllByUserId(userId, sort, pagination);
    }

    async findAllByTableId(tableId) {
        return await tableReservationRepository.findAllByTableId(tableId);
    }

    async create(reservationData) {
        await this.checkTableExist(reservationData.table_id);
        await this.checkTableIsFreeForThisTime(reservationData.table_id,
            reservationData.datetime_begin,
            reservationData.datetime_end
        );

        return await tableReservationRepository.create(reservationData);
    }

    async changeStatus(id, status) {
        await this.checkReservationExist(id);
        return await tableReservationRepository.update(id, status);
    }

    async checkReservationExist(id) {
        const reservation = await tableReservationRepository.findById(id);
        if (!reservation) {
            throw new NotFoundError(`Reservation with id = ${id} not found`);
        }
    }

    async checkTableExist(tableId) {
        const table = await tableService.findById(tableId);
        if (!table) {
            throw new NotFoundError(`Table with id = ${tableId} not found`);
        }
    }

    async checkTableIsFreeForThisTime(tableId, startTime, endTime) {
        const reservation = await tableReservationRepository.findAllBookedByTableIdAndReservationTime(tableId, startTime, endTime);
        if (reservation) {
            throw new ConflictError(`Table with id = ${tableId} from ${reservation.datetime_begin} to ${reservation.datetime_end} is taken`);
        }
    }
}

module.exports = new TableReservationService();