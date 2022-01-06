const User = require('../models/user');
const constants = require('../constants');
const ConflictError = require("../errors/ConflictError");

class UserRepository {
    findUserById(id) {
        return User.findByPk(id);
    }

    findUserByLogin(login) {
        return User.findOne({where: {login: login}});
    }

    async list(page) {
        let result = null;
        const userOnPage = constants.usersOnPage;
        if (page) {
            result = await User.findAll({offset: userOnPage * (page - 1), limit: userOnPage});
        } else {
            result = await User.findAll();
        }
        return result;
    }

    async create(userData) {
        let userExist = await this.findUserByLogin(userData.login);
        if (userExist) {
            throw new ConflictError(`Login: ${userData.login} already exist`);
        }
        let user = null;
        user = await User.create(userData);
        return user;
    }
}

module.exports = new UserRepository();