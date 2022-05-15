let sayHello = (name) => {
    let text = 'Hello, ' + name;
    return () => {
        console.log(text);
    }
}

// one way to call the function 
const helloBert = sayHello('Bert');
helloBert();

// another way to call function
sayHello('Todd')();
