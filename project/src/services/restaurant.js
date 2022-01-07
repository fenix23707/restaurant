const restaurantRepository = require('../repository/restaurant');
const schemeService = require('../services/scheme');
const userService = require('../services/user');
const constants = require('../constants')
const ConflictError = require("../errors/ConflictError");
const NotFoundError = require("../errors/NotFoundError");

class RestaurantService {
    async findAll(match, sort, pagination) {
        return await restaurantRepository.findAll(match, sort, pagination);
    }

    async findByUserId(id) {
        return await restaurantRepository.findByUserId(id);
    }

    async findById(id) {
        return await restaurantRepository.findById(id);
    }

    async create(restaurantData) {
        //TODO: use transaction:
        await this.checkNameIsUnique(restaurantData.name);

        const restaurant = await restaurantRepository.create(restaurantData);

        const schemeData = restaurantData.scheme;
        schemeData.restaurant_id = restaurant.id;
        await schemeService.create(schemeData);

        const userId = restaurantData.user_id;
        await userService.changeRole(userId, constants.managerRoleNum);

        return restaurant;
    }

    async update(id, restaurantData) {
        const old = await restaurantRepository.findById(id);
        if (!old) {
            throw new NotFoundError(`Restaurant with id = ${id} not found`);
        }
        if (old.name != restaurantData.name) {
            await this.checkNameIsUnique(restaurantData.name);
        }
        await restaurantRepository.update(id, restaurantData);
    }

    async delete(id) {
        //TODO: complete
    }

    async checkNameIsUnique(name) {
        let restaurant = await restaurantRepository.findByName(name);
        if (restaurant) {
            throw new ConflictError(`Restaurant with name: ${name} already exist`);
        }
    }
}

module.exports = new RestaurantService();