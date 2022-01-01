const User = require('../models/user');
const constants = require('../constants');

class UserRepository {
    findUserById(id) {
        return User.findOne({where: {id: id}});
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
}

module.exports = new UserRepository();