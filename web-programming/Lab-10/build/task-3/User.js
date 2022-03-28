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
exports.User = void 0;
const RoleCheck_1 = require("./RoleCheck");
let User = class User {
    constructor(name, role) {
        this._name = name;
        this._role = role;
    }
    canEverything() {
        console.log(`my role is ${this._role} so i can everything`);
    }
    canNotEverything() {
        console.log(`my role is ${this._role} so i can't everything`);
    }
};
User = __decorate([
    (0, RoleCheck_1.RoleCheck)(),
    __metadata("design:paramtypes", [String, String])
], User);
exports.User = User;
let admin = new User("name", "admin");
let user = new User("name", "user");
admin.canEverything();
admin.canNotEverything();
user.canEverything();
user.canNotEverything();
//# sourceMappingURL=User.js.map