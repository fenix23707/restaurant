const Joi = require("joi");

const UserScheme = {
    create: Joi.object().keys({
        login: Joi.string()
            .max(50)
            .required(),
        password: Joi.string()
            .min(4)
            .max(20)
            .required()
    }),

    login: Joi.object().keys({
        login: Joi.string()
            .max(50)
            .required(),
        password: Joi.string()
            .min(4)
            .max(20)
            .required()
    }),

    changePassword: Joi.object().keys({
        oldPassword: Joi.string()
            .min(4)
            .max(20)
            .required(),
        newPassword: Joi.string()
            .min(4)
            .max(20)
            .required()
    })
}

module.exports = UserScheme;