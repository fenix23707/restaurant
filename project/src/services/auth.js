const userRepository = require('../repository/user');
const constants = require('../constants')
const ConflictError = require("../errors/ConflictError");

class AuthService {
    async signup(userData) {
        await this.checkLoginUnique(userData.login);

        userData.role = constants.userRoleNum;
        userData.status = constants.userActiveNum;

        return  await userRepository.create(userData);
    }

    async checkLoginUnique(login) {
        const userExist = await userRepository.findByLogin(login);
        if (userExist) {
            throw new ConflictError(`User with login = ${login} already exist`);
        }
    }
}

module.exports = new AuthService();