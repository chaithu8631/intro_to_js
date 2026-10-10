function factorial( factor ) {
    return factor > 0 ? factor * factorial(factor - 1) : 1;
}

console.log(factorial(1));
console.log(factorial(2));
console.log(factorial(3));
console.log(factorial(4));
console.log(factorial(5));
console.log(factorial(0));