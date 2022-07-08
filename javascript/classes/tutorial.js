class Button {
    constructor(value) {
        this.value = value;
    }

    // class fields binds the method on a per-object basis
    click = () => {
        console.log(this.value);
    }
}

let button = new Button("hello");
setTimeout(button.click, 1000); // undefined

/* basic class syntax structure */
class MyClass {
    prop = value; // property

    constructor(...) { // constructor
        // ...
    }

    method(...) { } // method

    get something(...) { } // getter method
    set something(...) { } // setter method

    [Symbol.iterator]() { } // method with computed name (symbol here)
    // ...
}
