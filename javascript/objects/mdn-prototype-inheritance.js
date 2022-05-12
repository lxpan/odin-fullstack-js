let animal = {
    jumps: null
};
let rabbit = {
    __proto__: animal,
    jumps: true
};


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
    pen: 3
  };
  
  let bed = {
    sheet: 1,
    pillow: 2
  };
  
  let pockets = {
    money: 2000
  };
  