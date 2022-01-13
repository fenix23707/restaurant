const restaurantService = require("../../services/restaurant");
const userService = require("../../services/user");
const restaurantRepository = require("../../repository/restaurant");
const ConflictError = require("../../errors/ConflictError");

describe("RestaurantService: create", () => {
    let restaurantDate;

    beforeEach(() => {
        restaurantDate = {
            "name": "ResTop",
            "user_id": 1
        }
    });

    test("successful create restaurant", async () => {
        restaurantRepository.findByName = jest.fn().mockResolvedValue(null);
        userService.changeRole = jest.fn();
        restaurantRepository.create = jest.fn((data) => {
            data.id = 1;
            return data;
        });

        const result = await restaurantService.create(restaurantDate);

        expect(result.id).not.toBeUndefined();
        expect(restaurantRepository.create).toHaveBeenCalledTimes(1);
        expect(userService.changeRole).toHaveBeenCalledTimes(1);
    })

    test("name  is not unique", async () => {
        restaurantRepository.findByName = jest.fn().mockResolvedValue({});
        try {
            await restaurantService.create(restaurantDate);
        } catch (err) {
            expect(err).toBeInstanceOf(ConflictError);
            expect(err.message).toEqual(`Restaurant with name: ${restaurantDate.name} already exist`);
        }
    })

});

describe("RestaurantService: update", () => {
    let restaurantDate;
    const id = 1;
    beforeEach(() => {
        restaurantDate = {
            "name": "ResTop",
            "user_id": 1
        }
    });

    test("successful update restaurant", async () => {
        restaurantRepository.findById = jest.fn().mockResolvedValue({name: restaurantDate.name});
        restaurantRepository.update = jest.fn();

        await restaurantService.update(id, restaurantDate);

        expect(restaurantRepository.update).toHaveBeenCalledTimes(1);
    })

    test("new name is not unique", async () => {
        restaurantRepository.findById = jest.fn().mockResolvedValue({name: restaurantDate.name + "q"});
        restaurantRepository.findByName = jest.fn().mockResolvedValue({});
        try {
            await restaurantService.update(id, restaurantDate);
        } catch (err) {
            expect(err).toBeInstanceOf(ConflictError);
            expect(err.message).toEqual(`Restaurant with name: ${restaurantDate.name} already exist`);
        }
    })

});