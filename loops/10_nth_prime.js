function isPrime(number) {
    if (number <= 1) return false;
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) return false;
    }
    return true;
}
let number = 0;
let primeCount = 0;
const n = 10;
while (primeCount < n) {
    primeCount = isPrime(number) ? primeCount + 1 : primeCount;
    number++;
}
// console.log(number);
number-=1;
console.log(number);

