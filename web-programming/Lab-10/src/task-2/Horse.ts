import {Animal} from "./Animal";

export class Horse extends Animal {
    private readonly _speed: number;


    constructor(food: string[], location: string, speed: number) {
        super(food, location);
        this._speed = speed;
    }


    get speed(): number {
        return this._speed;
    }

    eat(): void {
        console.log('Horse is eating')
    }

    makeNoise(): void {
        console.log('phh')
    }

    sleep(): void {
        console.log('Horse is sleeping')
    }
}