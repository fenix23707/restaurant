import {Animal} from "./Animal";

export class Dog extends Animal{
    private readonly _dogSpecificValue: any;

    constructor(food: string[], location: string, dogSpecificValue: any) {
        super(food, location);
        this._dogSpecificValue = dogSpecificValue;
    }


    get dogSpecificValue(): any {
        return this._dogSpecificValue;
    }

    eat(): void {
        console.log('Dog is eating')
    }

    makeNoise(): void {
        console.log('gav')
    }

    sleep(): void {
        console.log('Dog is sleeping')
    }
}