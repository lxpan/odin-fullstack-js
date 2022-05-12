// let animal = {
//     jumps: null
// };
// let rabbit = {
//     __proto__: animal,
//     jumps: true
// };


function runExercise1() {
    console.log(rabbit.jumps) // true, taken from rabbit
    delete rabbit.jumps;

    console.log(rabbit.jumps) // null, taken from animal

    delete animal.jumps;
    console.log(rabbit.jumps) // undefined, no such property anymore
}


let head = {
    glasses: 1
};

let table = {
    __proto__: head,
    pen: 3
};

let bed = {
    __proto__: table,
    sheet: 1,
    pillow: 2
};

let pockets = {
    __proto__: bed,
    money: 2000
};

// Task: assign prototypes such that the following inheritance is followed: 
// pockets -> bed -> table -> head
// pockets.prototype = bed;
// bed.prototype = table;
// table.prototype = head;

// console.log(pockets.glasses); // 3 jumps
// console.log(head.glasses); // 0 jumps
//ANS: it faster to get glasses as head.glasses
//CORRECTION: no difference as these values are cached when first encountered

let animal = {
    eat() {
        this.full = true;
    }
};

let rabbit = {
    __proto__: animal
};

rabbit.eat(); // rabbit receives the property when .eat() is called (this = rabbit because rabbit is before the .)

// ---------------------------------------------------------------------------------------------------------------

let hamster = {
    // stomach: [],

    eat(food) {
        this.stomach.push(food);
    }
};

let speedy = {
    __proto__: hamster,
    stomach: []
};

let lazy = {
    __proto__: hamster,
    stomach: []
};

// This one found the food
speedy.eat("apple");
speedy.eat("banana");
lazy.eat("chiko roll");
console.log(speedy.stomach); // apple

// This one also has it, why? fix please.
console.log(lazy.stomach); // apple
