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
            console.log(err);
            return next(err);
        }
    }
}

module.exports = new UserController();