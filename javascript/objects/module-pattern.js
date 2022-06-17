let myModule = (function() {
    'use strict'; // run in ES5 strict mode
    // Your code here
    // All function and variables are scoped to this function
    let _privateProperty = 'Hello World';

    function _privateMethod() {
        console.log(_privateProperty);
    }


    return {
        publicMethod: function() {
          _privateMethod();
        }
      };
  })();

myModule.publicMethod();