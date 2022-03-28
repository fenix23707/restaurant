"use strict";
exports.__esModule = true;
exports.Vet = void 0;
var Vet = /** @class */ (function () {
    function Vet() {
    }
    Vet.prototype.treatAnimal = function (animal) {
        console.log("food: ".concat(animal.food, ", location: ").concat(animal.location));
    };
    return Vet;
}());
exports.Vet = Vet;
