"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dog = void 0;
const Animal_1 = require("./Animal");
class Dog extends Animal_1.Animal {
    constructor(food, location, dogSpecificValue) {
        super(food, location);
        this._dogSpecificValue = dogSpecificValue;
    }
    get dogSpecificValue() {
        return this._dogSpecificValue;
    }
    eat() {
        console.log('Dog is eating');
    }
    makeNoise() {
        console.log('gav');
    }
    sleep() {
        console.log('Dog is sleeping');
    }
}
exports.Dog = Dog;
//# sourceMappingURL=Dog.js.map