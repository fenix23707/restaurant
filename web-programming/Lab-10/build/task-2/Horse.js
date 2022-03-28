"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Horse = void 0;
const Animal_1 = require("./Animal");
class Horse extends Animal_1.Animal {
    constructor(food, location, speed) {
        super(food, location);
        this._speed = speed;
    }
    get speed() {
        return this._speed;
    }
    eat() {
        console.log('Horse is eating');
    }
    makeNoise() {
        console.log('phh');
    }
    sleep() {
        console.log('Horse is sleeping');
    }
}
exports.Horse = Horse;
//# sourceMappingURL=Horse.js.map