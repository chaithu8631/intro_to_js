function sumOfAP(initialTerm, difference, numberOfTerms) {
    return (numberOfTerms / 2)* (2 * initialTerm + (numberOfTerms - 1) * difference);
}
console.log(sumOfAP(2,3,5));