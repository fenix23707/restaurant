const constants = {
    userRoleNum: 0,
    managerRoleNum: 1,
    adminRoleNum: 2,

    userRoleText: "user",
    managerRoleText: "manager",
    adminRoleText: "admin",

    userActiveNum: 0,
    userNotActiveNum: 1,

    restaurantActiveNum: 0,
    restaurantNotActiveNum: 1,

    bookedReservationStatusNum: 0,
    completedReservationStatusNum: 0,
    cancelledReservationStatusNum: 0,

    pageSize: 4,

    secret: "secret",
    jwtExpiresIn: 10 * 60 * 1000 // = 10m
}

module.exports = constants;