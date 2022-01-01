const Sequelize = require("sequelize");
const sequelize = require("../database/sequelize");
const bcrypt = require("bcrypt");


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
    return bcrypt.hash(password, bcrypt.genSalt(6));
}

User.prototype.validatePassword = function (password) {
    if (!password || !this.password) {
        return false;
    }
    return bcrypt.compare(password, this.password);
}

module.exports = User;