import {Animal} from "./Animal";

export class Vet {
    treatAnimal(animal: Animal): void {
        console.log(`food: ${animal.food}, location: ${animal.location}`)
    }
}