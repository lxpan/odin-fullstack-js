const personFactory = (name, age) => {
    const sayHello = () => console.log('Hello!');
    return { name, age, sayHello };
};

const jeff = personFactory('jeff');
jeff.sayHello();

