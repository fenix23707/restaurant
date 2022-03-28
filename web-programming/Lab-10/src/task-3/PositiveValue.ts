import {Integer} from "./Integer";

export function PositiveValue() {
    return function (target: Object, key: string, descriptor: PropertyDescriptor) {
        descriptor.value = function() {
            if (this.value < 0) {
                throw new Error(`${this.value} should be positive`);
            } else {
                return Math.sqrt(this.value);
            }
        }
    };
}