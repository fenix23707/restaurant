"use strict";
exports.__esModule = true;
exports.Animal = void 0;
var Animal = /** @class */ (function () {
    function Animal(food, location) {
        this._food = food;
        this._location = location;
    }
    Object.defineProperty(Animal.prototype, "food", {
        get: function () {
            return this._food;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Animal.prototype, "location", {
        get: function () {
            return this._location;
        },
        enumerable: false,
        configurable: true
    });
    return Animal;
}());
exports.Animal = Animal;
