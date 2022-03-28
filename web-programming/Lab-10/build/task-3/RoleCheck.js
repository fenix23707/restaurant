"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoleCheck = void 0;
function RoleCheck() {
    return function _DecoratorName(constr) {
        return class extends constr {
            constructor(...args) {
                super(...args);
                if (args[1] !== "admin") {
                    // @ts-ignore
                    super.canEverything = () => { };
                }
                // console.log('Here is my attribute!', attr.attrName)
            }
        };
    };
    /*function log(target: Object, propertyKey: string, descriptor: TypedPropertyDescriptor<any>) {
        const originalMethod = descriptor.value; // save a reference to the original method

        // NOTE: Do not use arrow syntax here. Use a function expression in
        // order to use the correct value of `this` in this method (see notes below)
        descriptor.value = function(...args: any[]) {
            // pre
            console.log("The method args are: " + JSON.stringify(args));
            // run and store result
            const result = originalMethod.apply(this, args);
            // post
            console.log("The return value is: " + result);
            // return the result of the original method (or modify it before returning)
            return result;
        };

        return descriptor;
    }*/
}
exports.RoleCheck = RoleCheck;
/*return function (ctr: Function) {
    ctr = function (name: string, role: string) {
        if (role === "admin") {
            console.log(role)
        }
        this.role;

    };

    return ctr;
};*/
//# sourceMappingURL=RoleCheck.js.map