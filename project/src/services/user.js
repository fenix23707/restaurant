const userRepository = require('../repository/user');
const constants = require('../constants')

class UserService {
    async list(page) {
        return await userRepository.list(page);
    }

    async findUserById(id) {
        return await userRepository.findUserById(id);
    }
}

module.exports = new UserService();