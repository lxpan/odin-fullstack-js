function collatz(n) {
    console.log(n);
    if (n == 1) {
        return;
    }
    else if (n % 2 == 0) {
        return collatz(n / 2);
    }
    else if (n % 2 == 1) {
        return collatz(3*n + 1);
    }
}


// calculates the number of steps required for collatz to return to 1
function collatzNumSteps(n) {
    // console.log(n);
    if (n == 1) {
        return 0;
    }
    else if (n % 2 == 0) {
        return 1 + collatzNumSteps(n / 2);
    }
    else if (n % 2 == 1) {
        return 1 + collatzNumSteps(3*n + 1);
    }
}

console.log(collatzNumSteps(5));