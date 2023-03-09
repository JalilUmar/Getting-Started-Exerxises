"use strict";
let animals = ['Cat', 'Dog', 'Cow', 'Goat'];
for (let i = 0; i < animals.length; i++) {
    let animal = animals[i];
    if (animal === 'Cat') {
        console.log(`A ${animal} is a cute creature.`);
    }
    else if (animal === 'Dog') {
        console.log(`A ${animal} would be a great pet.`);
    }
    else if (animal === 'Cow') {
        console.log(`A ${animal} gives milk.`);
    }
    else if (animal === 'Goat') {
        console.log(`A ${animal} is also called Greatest Of All Time.`);
    }
}
console.log(`A cow, goat, dog, and cat are all animals that belong to the class Mammalia. They all have hair or fur, are warm-blooded, and produce milk to feed their young. Additionally, they all have four legs, are vertebrates, and breathe air through lungs.`);
