import {Animal} from "./Animal";
import {Dog} from "./Dog";
import {Cat} from "./Cat";
import {Horse} from "./Horse";
import {Vet} from "./Vet";

let animals: Animal[] = [
    new Dog(["meat"], "minsk", 0),
    new Cat(["cat corm"], "vitebsk", "any"),
    new Dog(["meat"], "gomel", 0),
    new Horse(["hay"], "minsk", 10),
];

let vet: Vet = new Vet();
animals.forEach(animal => vet.treatAnimal(animal));