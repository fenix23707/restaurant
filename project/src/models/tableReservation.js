const Sequelize = require("sequelize");
const sequelize = require("../database/sequelize");

/**
 * @swagger:
 * components:
 *   schemas:
 *      TableReservation:
 *        type: object
 *        required:
 *          - date_begin
 *          - date_end
 *          - capacity
 *          - table_id
 *        properties:
 *          id:
 *            type: integer
 *            description: The auto-generated id of table reservation
 *          date_begin:
 *            type: string
 *            description: Start of reservation
 *          date_end:
 *            type: string
 *            description: End of reservation
 *          capacity:
 *            type: integer
 *            description: Number of people.
 *          status:
 *            type: integer
 *            description: Status of reservation. (BOOKED - 0, COMPLETED - 1, CANCELLED - 2)
 *          table_id:
 *            type: integer
 *            description: The id of table that was booked
 *          user_id:
 *            type: integer
 *            description: The id of user who was booked the table
 *        example:
 *          id: 1
 *          date_begin: "2020-02-08 09:30:00"
 *          date_end: "2020-02-08 10:30:00"
 *          capacity: 1
 *          status: 0
 *          table_id: 1
 *          user_id: 2
 */
const TableReservation = sequelize.define("book_table", {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    datetime_begin: {
        type: Sequelize.DATE,
        allowNull: false,
    },
    datetime_end: {
        type: Sequelize.DATE,
        allowNull: false,
    },
    capacity: {
        type: Sequelize.SMALLINT,
        allowNull: false,
        min: 1,
        max: 5000
    },
    status: {
        type: Sequelize.SMALLINT,
        allowNull: false,
        min: 0,
        max: 2,
    },
    table_id: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    user_id: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
});

module.exports = TableReservation;