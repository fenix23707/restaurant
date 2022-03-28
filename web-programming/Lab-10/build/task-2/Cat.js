"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cat = void 0;
const Animal_1 = require("./Animal");
class Cat extends Animal_1.Animal {
    constructor(food, location, catSpecificValue) {
        super(food, location);
        this._catSpecificValue = catSpecificValue;
    }
    get catSpecificValue() {
        return this._catSpecificValue;
    }
    eat() {
        console.log('Cat is eating');
    }
    makeNoise() {
        console.log('myau');
    }
    sleep() {
        console.log('Cat is sleeping');
    }
}
exports.Cat = Cat;
//# sourceMappingURL=Cat.js.map