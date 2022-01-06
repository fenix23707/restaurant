const userService = require('../services/user');

class UserController {
    async list(req, res, next) {
        try {
            let page = null;
            if (req.query.page) {
                page = req.query.page;
            }
            res.json(await userService.list(page));
        } catch (err) {
            return next(err);
        }
    }

    async searchById(req, res, next) {
        try {
            let id = null;
            if (req.params.id) {
                id = req.params.id;
            }
            res.json(await userService.findUserById(id));
        } catch (err) {
            return next(err);
        }
    }

    async create(req, res, next) {
        const userData = req.body;
        try {
            let user = await userService.create(userData);
            res.json(user);
        } catch (err) {
            return next(err);
        }
    }
}

module.exports = new UserController();