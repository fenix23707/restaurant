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
exports.Horse = void 0;
var Animal_1 = require("./Animal");
var Horse = /** @class */ (function (_super) {
    __extends(Horse, _super);
    function Horse(food, location, speed) {
        var _this = _super.call(this, food, location) || this;
        _this._speed = speed;
        return _this;
    }
    Object.defineProperty(Horse.prototype, "speed", {
        get: function () {
            return this._speed;
        },
        enumerable: false,
        configurable: true
    });
    Horse.prototype.eat = function () {
        console.log('Horse is eating');
    };
    Horse.prototype.makeNoise = function () {
        console.log('phh');
    };
    Horse.prototype.sleep = function () {
        console.log('Horse is sleeping');
    };
    return Horse;
}(Animal_1.Animal));
exports.Horse = Horse;
