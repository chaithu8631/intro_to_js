// fibonacci(5) => [0, 1, 1, 2, 3]

function fibonacci(n) {
    const fibonacciArray=[];
    if(n > 0){
        fibonacciArray.push(0);
    }
    if(n > 1){
        fibonacciArray.push(1);
    }
    for(let i=2;i<n;i++){
        fibonacciArray[i]=fibonacciArray[i-1]+fibonacciArray[i-2];
    }
    return fibonacciArray;
}

console.log(fibonacci(5));