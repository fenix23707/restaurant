const userRepository = require('../repository/user');
const userInfoService = require('../services/userinfo');
const constants = require('../constants')
const UserInfo = require("../models/userinfo");

class AuthService {
    async signup(userData) {
        userData.id = undefined;
        userData.role = constants.userRoleNum;
        userData.status = constants.userActiveNum;

        const user = await userRepository.create(userData);

        UserInfo.create({user_id: user.id});

        return user;
    }
}

module.exports = new AuthService();