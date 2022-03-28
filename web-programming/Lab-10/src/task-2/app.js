"use strict";
exports.__esModule = true;
var Dog_1 = require("./Dog");
var Cat_1 = require("./Cat");
var Horse_1 = require("./Horse");
var Vet_1 = require("./Vet");
var animals = [
    new Dog_1.Dog(["meat"], "minsk", 0),
    new Cat_1.Cat(["cat corm"], "vitebsk", "any"),
    new Dog_1.Dog(["meat"], "gomel", 0),
    new Horse_1.Horse(["hay"], "minsk", 10),
];
var vet = new Vet_1.Vet();
animals.forEach(function (animal) { return vet.treatAnimal(animal); });
