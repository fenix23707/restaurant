import {RoleCheck} from "./RoleCheck";

@RoleCheck()
export class User {
    private _name: string
    private _role: string


    constructor(name: string, role: string) {
        this._name = name;
        this._role = role;
    }

    canEverything() {
        console.log(`my role is ${this._role} so i can everything`)
    }

    canNotEverything() {
        console.log(`my role is ${this._role} so i can't everything`)
    }
}

let admin = new User("name", "admin");
let user = new User("name", "user");
admin.canEverything()
admin.canNotEverything()
user.canEverything()
user.canNotEverything()