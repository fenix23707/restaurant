export abstract class Animal {
    private readonly _food: string[];
    private readonly _location: string;


    protected constructor(food: string[], location: string) {
        this._food = food;
        this._location = location;
    }

    get food(): string[] {
        return this._food;
    }

    get location(): string {
        return this._location;
    }

    abstract makeNoise(): void;
    abstract eat(): void;
    abstract sleep(): void;
}