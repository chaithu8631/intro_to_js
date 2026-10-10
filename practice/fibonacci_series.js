function fibonacci(n){
    const firstTerm = 0;
    const secondTerm = 1;
    if(n === 0){
        printTerm(firstTerm);
    }
    if(n === 1){
        printTerm(firstTerm)
        printTerm(secondTerm);
    }
    if(n > 1)
        printTerm(0);
        printTerm(1);
        fibonacciSeries(2, n, firstTerm, secondTerm);

}
function fibonacciSeries(currentTerm, n, lastPrevious, previous) {
    if( currentTerm < n) {
        printTerm(lastPrevious+previous);
        fibonacciSeries(currentTerm+1, n, previous, previous+lastPrevious);
    }
}
function printTerm(term){
    console.log(term);
}
console.log(fibonacci(7));