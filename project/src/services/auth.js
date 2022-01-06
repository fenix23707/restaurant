const userRepository = require('../repository/user');
const userInfoService = require('../services/userinfo');
const constants = require('../constants')

class AuthService {
    async signup(userData) {
        userData.id = undefined;
        userData.role = constants.userRoleNum;
        userData.status = constants.userActiveNum;

        const user = await userRepository.create(userData);

        const userInfo = {user_id: user.id};
        await userInfoService.create(userInfo);

        return user;
    }
}

module.exports = new AuthService();