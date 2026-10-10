// reverseFibonacci(5) => [3, 2, 1, 1, 0]

function reverseFibonacci(n) {
    const fibonacciArray = [];
    if (n > 0) {
        fibonacciArray.unshift(0);
    }
    if (n > 1) {
        fibonacciArray.unshift(1);
    }
    for (let i = fibonacciArray.length; i < n; i++) {
        fibonacciArray.unshift(fibonacciArray[0] + fibonacciArray[1]);
    }
    return fibonacciArray;
}

console.log(reverseFibonacci(5));
