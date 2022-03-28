"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PositiveValue = void 0;
function PositiveValue() {
    return function (target, key, descriptor) {
        descriptor.value = function () {
            if (this.value < 0) {
                throw new Error(`${this.value} should be positive`);
            }
            else {
                return Math.sqrt(this.value);
            }
        };
    };
}
exports.PositiveValue = PositiveValue;
//# sourceMappingURL=PositiveValue.js.map