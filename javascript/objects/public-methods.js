(function () {
    let myFunction = function () {
        // do some stuff here
    };
})();

// myFunction(); // inaccessible

let Module = ( function () {
    return {
        myMethod: function () {
            console.log('myMethod has been called.');
        },
        someOtherMethod: function () {
            console.log('someOtherMethod has been called');
        }
    };
})();

Module.myMethod();
Module.someOtherMethod();