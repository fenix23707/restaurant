const Sequelize = require("sequelize");
const sequelize = require("../database/sequelize");
const bcrypt = require("bcrypt");

/**
 * @swagger:
 * components:
 *   schemas:
 *      User:
 *        type: object
 *        required:
 *          - login
 *          - password
 *        properties:
 *          id:
 *            type: integer
 *            description: The auto-generated id of user
 *          login:
 *            type: string
 *            description: The user login
 *          password:
 *            type: string
 *            description: The user password
 *          role:
 *            type: smallint
 *            description: The user role
 *          status:
 *            type: smallint
 *            description: The user role
 *        example:
 *          id: 1
 *          login: fenix23707
 *          password: 12345678
 *          role: 1
 *          status: 1
 */
const User = sequelize.define("user", {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    login: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    role: {
        type: Sequelize.SMALLINT,
        allowNull: false,
        min: 0,
        max: 2
    },
    status: {
        type: Sequelize.SMALLINT,
        allowNull: false,
        min: 0,
        max: 1
    }
});

User.beforeCreate((user, opts) => {
    user.password = User.hashPassword(user.password);
})

User.hashPassword = password => {
    return bcrypt.hashSync(password.toString(), bcrypt.genSaltSync(8));
}

User.prototype.validatePassword = function (password) {
    if (!password || !this.password) {
        return false;
    }
    return bcrypt.compare(password, this.password);
}

module.exports = User;