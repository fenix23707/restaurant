const authService = require('../services/auth');

class AuthController {
    async signup(req, res, next) {
        const userData = req.body;
        try {
            let user = await authService.signup(userData);
            res.status(201).json(user);
        } catch (err) {
            return next(err);
        }
    }
}

module.exports = new AuthController();