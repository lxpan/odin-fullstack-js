const Person = (name) => {
    const sayName = () => console.log(`my name is ${name}`);
    return {sayName};
  }
  
  const Nerd = (name) => {
    // simply create a person and pull out the sayName function with destructuring assignment syntax!
    // const {sayName} = Person(name);
    const prototype = Person(name);
    const doSomethingNerdy = () => console.log('nerd stuff');
    // return {sayName, doSomethingNerdy};

    // copies all numerable own properties from prototype and doSome... into {}
    return Object.assign({}, prototype, {doSomethingNerdy}); // {sayName} & {doSomethingNerdy}
  }
  
  const jeff = Nerd('jeff');
  
  jeff.sayName(); //my name is jeff
  jeff.doSomethingNerdy(); // nerd stuff
  console.log(jeff);
  