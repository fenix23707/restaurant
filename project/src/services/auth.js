const userRepository = require('../repository/user');
const constants = require('../constants')
const ConflictError = require("../errors/ConflictError");
const ForbiddenError = require("../errors/ForbiddenError");

class AuthService {
    async findActiveUserById(id) {
        const user = await userRepository.findById(id);
        this.checkUserIsActive(user);
        return user;
    }

    async signup(userData) {
        await this.checkLoginUnique(userData.login);

        userData.role = constants.userRoleNum;
        userData.status = constants.userActiveNum;

        return await userRepository.create(userData);
    }

    async login(login, password) {
        const user = await userRepository.findByLogin(login);
        if (!user || !user.validatePassword(password)) {
            throw new ForbiddenError("Invalid login or password");
        }

        this.checkUserIsActive(user);

        return user;
    }

    checkUserIsActive(user) {
        if (user.status === constants.userNotActiveNum) {
            return new ForbiddenError("User is not active");
        }
    }

    async checkLoginUnique(login) {
        const userExist = await userRepository.findByLogin(login);
        if (userExist) {
            throw new ConflictError(`User with login = ${login} already exist`);
        }
    }
}

module.exports = new AuthService();