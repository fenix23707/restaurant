const userRepository = require('../repository/user');
const constants = require('../constants')
const ConflictError = require("../errors/ConflictError");

class UserService {
    async list(page) {
        return await userRepository.list(page);
    }

    async findUserById(id) {
        return await userRepository.findUserById(id);
    }

    async create(userData) {
        let userExist = await userRepository.findUserByLogin(userData.login);
        if (userExist) {
            throw new ConflictError(`Login: ${userData.login} already exist`);
        }
        return await userRepository.create(userData);
    }

    async changeRole(id, role) {
        const user = await userRepository.findUserById(id);
        if (!user) {
            throw new NotFoundError(`User with id: ${id} not found.`);
        }
        if (user.role === constants.userRoleNum) {
            const userData = {role: role};
            await userRepository.update(id, userData);
        }
    }
}

module.exports = new UserService();