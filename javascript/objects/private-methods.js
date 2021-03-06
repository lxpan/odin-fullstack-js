// let Module = ( () => {
//     let privateMethod = () => {
//         console.log('privateMethod has been called.');
//     };
//     return {
//         publicMethod: () => {
//             console.log('publicMethod has been called.');
//             privateMethod();
//         }
//     }
// })();

// Module.publicMethod();

// var Module = (function () {
//     var myModule = {};
//     var _privateMethod = function () {
//         console.log('privateMethod has been called.');
//     };
//     myModule.publicMethod = function () {
//         console.log('publicMethod has been called.');
//         _privateMethod();
//     };
//     myModule.anotherPublicMethod = function () {

//     };
//     return myModule; // returns the Object with public methods
// })();

// // usage
// Module.publicMethod();

const FactoryFunction = string => {
    const capitalizeString = () => string.toUpperCase();  // private function
    const printString = () => console.log(`----${capitalizeString()}----`);
    return { printString };  // public function
};

const taco = FactoryFunction('taco');
taco.printString();
// taco.capitalizeString(); // Error
