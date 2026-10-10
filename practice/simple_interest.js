function calculateInterest(principalAmount, interestRate, time) {
    return (principalAmount * time * interestRate ) / 100 ;
}

console.log(calculateInterest(5000, 2, 12));