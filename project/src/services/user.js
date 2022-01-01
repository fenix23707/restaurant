const userRepository = require('../repository/user');
const constants = require('../constants')

class UserService {
    async findUserById(id) {
        return await userRepository.findUserById(id);
    }

    async list(page) {
        return await userRepository.list(page);
    }

}

module.exports = new UserService();