"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IntegerValue = void 0;
function IntegerValue() {
    return function (target, propertyKey) {
        let value;
        const getter = function () {
            return value;
        };
        const setter = function (newVal) {
            if (!Number.isInteger(newVal)) {
                throw new Error(`${newVal} should be integer`);
                // Object.defineProperty(target, 'errors', {
                //     value: `${newVal} should be integer`
                // });
            }
            else {
                value = newVal;
            }
        };
        Object.defineProperty(target, propertyKey, {
            get: getter,
            set: setter
        });
    };
}
exports.IntegerValue = IntegerValue;
//# sourceMappingURL=IntegerValue.js.map