"use strict";
exports.__esModule = true;
exports.IntegerValue = void 0;
function IntegerValue() {
    return function (target, propertyKey) {
        var value;
        var getter = function () {
            return value;
        };
        var setter = function (newVal) {
            if (!Number.isInteger(newVal)) {
                Object.defineProperty(target, 'errors', {
                    value: "".concat(newVal, " should be integer")
                });
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
