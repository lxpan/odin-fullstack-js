// let myFunction = () => {
//     console.log(this); // this = global, [object Window]
// };
// myFunction();

// let myObject = {user: 'John Doe'}
// myObject.myMethod = () => {
//     console.log(this); // this = Object { myObject }
// };

const nums = [1, 2, 3]

for (let i = 0; i < nums.length; i++) {
    (() => {
        console.log(this); // [object Window]
    }).call(nums[i]); // changes scope of function 
}