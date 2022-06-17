let myModule = (function() {
    'use strict'; // run in ES5 strict mode
    // Your code here
    // All function and variables are scoped to this function
    return {
        publicMethod: function() {
          console.log('Hello World!');
        }
      };
  })();

myModule.publicMethod();