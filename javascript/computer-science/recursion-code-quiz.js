/*
Question 1: Sum all numbers
Write a function called sumRange. It will take a number and return the sum of all numbers from 1 up to the number passed in.

Sample: sumRange(3) returns 6, since 1 + 2 + 3 = 6.
*/
function sumRange(n) {
    console.log(n);
    if (n == 1) {
        return 1;
    }
    return n + sumRange(n - 1);
}
// sumRange(3) = 3 + sumRange(2)=3
//   sumRange(2) = 2 + sumRange(1)=1
//     sumRange(1) = 1
// console.log(sumRange(3));

// **************************
// Question 2: Power function
// Write a function called power which takes in a base and an exponent. If the exponent is 0, return 1.
function power(base, exponent) {
    if (exponent == 0) return 1;

    return base * power(base, exponent - 1);
}
// console.log(power(2, 4));
// power(2, 3) = 2 * power(2,2)
//   power(2,2) = 2 * power(2,1)
//     power(2,1) = 2 * power(2,0)
//       power(2,0 = 0

// **************************
// Question 3: Calculate factorial
// Write a function that returns the factorial of a number. As a quick refresher, a factorial of a number is the result of that number 
// multiplied by the number before it, and the number before that number, and so on, until you reach 1. The factorial of 1 is just 1.
function factorial(n) {
    if (n == 1) return 1;

    return n * factorial(n - 1);
}

// console.log(factorial(5));

// **************************
// Question 4: Check all values in an array
// Write a function called all which accepts an array and a callback and returns true if every value in the array 
// returns true when passed as parameter to the callback function
function all(numArray, callback, idx = 0) {
    // if we've made it to the end, then all must be true
    if (idx > numArray.length - 1) return true;
    // any one false callback return is a false
    if (callback(numArray[idx]) != true) return false;
    // console.log(`${numArray[idx]} > 7: ${callback(numArray[idx])}`);
    return callback(numArray[idx]) && all(numArray, callback, idx + 1);
}

// let allAreLessThanSeven = all([1,2,6,3], function(num) {
// 	return num < 7;
// });

// console.log(allAreLessThanSeven); // false