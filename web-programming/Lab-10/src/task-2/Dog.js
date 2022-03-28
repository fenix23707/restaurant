"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.Dog = void 0;
var Animal_1 = require("./Animal");
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog(food, location, dogSpecificValue) {
        var _this = _super.call(this, food, location) || this;
        _this._dogSpecificValue = dogSpecificValue;
        return _this;
    }
    Object.defineProperty(Dog.prototype, "dogSpecificValue", {
        get: function () {
            return this._dogSpecificValue;
        },
        enumerable: false,
        configurable: true
    });
    Dog.prototype.eat = function () {
        console.log('Dog is eating');
    };
    Dog.prototype.makeNoise = function () {
        console.log('gav');
    };
    Dog.prototype.sleep = function () {
        console.log('Dog is sleeping');
    };
    return Dog;
}(Animal_1.Animal));
exports.Dog = Dog;
