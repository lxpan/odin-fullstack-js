const concatArrow = (separator) => {
    let args = Array.prototype.slice.call(arguments, 1);
    return args.join(separator);
}

function concatFunction (separator) {
    let args = Array.prototype.slice.call(arguments, 1);
    return args.join(separator);
}

console.log(concatFunction(1, 2, 3));