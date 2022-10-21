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

// *******************************
// Question 5: Product of an array
// Write a function called productOfArray which takes in an array of numbers and returns the product of them all
function productOfArray(arrayNum, idx = 0) {
    if (idx > arrayNum.length - 1) return 1;

    return arrayNum[idx] * productOfArray(arrayNum, idx + 1);
}

function productOfArrayShift(arrayNum) {
    if (arrayNum.length === 0) return 1;

    return arrayNum.shift() * productOfArrayShift(arrayNum);
}

// let numbers = [2, 3, 3, 3, 1];
// console.log(productOfArray(numbers));
// console.log(productOfArrayShift(numbers));

// ****************************
// Question 6: Search JS object
// Write a function called contains that searches for a value in a nested object. It returns true if the object
// contains that value.
let nestedObject = {
    data: {
        info: {
            stuff: {
                thing: {
                    moreStuff: {
                        magicNumber: 44,
                        something: "foo2",
                        truthy: true,
                    },
                },
            },
        },
    },
};

function contains(nestedObj, target) {
    for (const property in nestedObj) {
        // console.log(nestedObj[property]);
        if (typeof nestedObj[property] === "object") {
            return contains(nestedObj[property], target);
        }

        if (nestedObj[property] == target) {
            return true;
        }
    }
    return false;
}

// let doesItContain44 = contains(nestedObject, true);
// console.log(doesItContain44);

// *******************************************
// Question 7: Parse a multi-dimensional array
// Given a multi-dimensional integer array, return the total number of integers stored inside this array
function totalIntegers(mdArray) {
    if (mdArray.length === 0) return 0;

    let total = 0;
    let first = mdArray.shift();
    console.log(`first: ${first}`);

    if (Array.isArray(first)) {
        total += totalIntegers(first);
    }
    else if (Number.isInteger(first)) {
        total += 1;
    }

    return total + totalIntegers(mdArray);
}

// let seven = totalIntegers([[[5], 3], 0, 2, ["foo"], [], [4, [5, 6]]]); // 7
// console.log(seven);
