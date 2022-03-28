"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Integer = void 0;
const IntegerValue_1 = require("./IntegerValue");
const PositiveValue_1 = require("./PositiveValue");
class Integer {
    constructor(value) {
        this._value = value;
    }
    get value() {
        return this._value;
    }
    getSqrt() {
        return Math.sqrt(this._value);
    }
}
__decorate([
    (0, IntegerValue_1.IntegerValue)(),
    __metadata("design:type", Number)
], Integer.prototype, "_value", void 0);
__decorate([
    (0, PositiveValue_1.PositiveValue)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Number)
], Integer.prototype, "getSqrt", null);
exports.Integer = Integer;
let o1 = new Integer(9);
console.log(o1.value);
console.log(o1.getSqrt());
// let o2 = new Integer(6.12);
// console.log(o2.value)
//# sourceMappingURL=Integer.js.map