function factorial(number){
    if(number === 1){
        return 1;
    }
    return number * factorial(number - 1);
}
console.log(factorial(5));
console.log(factorial(4));
console.log(factorial(3));
console.log(factorial(2));
console.log(factorial(1));

/**
  factorial(5) -> factorial(4)  -> 120
  factorial(4) -> factorial(3)  -> 24
  factorial(3) -> factorial(2)  -> 6
  factorial(2) -> factorial(1)  -> 2
  factorial(1) -> 1
 */
