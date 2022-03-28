import {IntegerValue} from "./IntegerValue";
import {PositiveValue} from "./PositiveValue";


export class Integer {
    @IntegerValue()
    readonly _value: number;

    constructor(value: number) {
        this._value = value;
    }

    get value(): number {
        return this._value;
    }

    @PositiveValue()
    getSqrt() : number {
        return Math.sqrt(this._value);
    }
}

let o1 = new Integer(9);
console.log(o1.value)
console.log(o1.getSqrt())
// let o2 = new Integer(6.12);
// console.log(o2.value)
