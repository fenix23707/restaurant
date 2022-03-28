"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Dog_1 = require("./Dog");
const Cat_1 = require("./Cat");
const Horse_1 = require("./Horse");
const Vet_1 = require("./Vet");
let animals = [
    new Dog_1.Dog(["meat"], "minsk", 0),
    new Cat_1.Cat(["cat corm"], "vitebsk", "any"),
    new Dog_1.Dog(["meat"], "gomel", 0),
    new Horse_1.Horse(["hay"], "minsk", 10),
];
let vet = new Vet_1.Vet();
animals.forEach(animal => vet.treatAnimal(animal));
//# sourceMappingURL=app.js.map