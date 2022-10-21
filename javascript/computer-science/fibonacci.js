// Using iteration, write a function fibs which takes a number and returns an array containing that many numbers from the
// fibonacci sequence
function fibs(n) {
    let seq = [0, 1];

    for (let i = 2; i < n; i++) {
        let first = seq[i - 2];
        let second = seq[i - 1];
        seq.push(first + second);
    }

    return seq;
}

function fibsRec(n, seq = [0, 1], i = 2) {
    if (n == 1) return [0];
    if (i >= n) return seq;

    let n_2 = seq[i - 2];
    let n_1 = seq[i - 1];

    seq.push(n_2 + n_1);
    return fibsRec(n, seq, i + 1);
}

function fibsRecOneLiner(n, seq = [0, 1], i = 2) {
    return (i >= n) ? seq : fibsRecOneLiner(n, seq.concat(seq[i - 2] + seq[i - 1]), i + 1);
}

// console.log(fibs(8));
console.log(fibsRec(2));

