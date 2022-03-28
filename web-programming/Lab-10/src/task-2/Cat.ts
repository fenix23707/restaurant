import {Animal} from "./Animal";

export class Cat extends Animal{
    private readonly _catSpecificValue: any;


    constructor(food: string[], location: string, catSpecificValue: any) {
        super(food, location);
        this._catSpecificValue = catSpecificValue;
    }


    get catSpecificValue(): any {
        return this._catSpecificValue;
    }

    eat(): void {
        console.log('Cat is eating')
    }

    makeNoise(): void {
        console.log('myau')
    }

    sleep(): void {
        console.log('Cat is sleeping')
    }
}