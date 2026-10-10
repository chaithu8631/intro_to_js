function compoundInterest(
    principalAmount,
    interestRate,
    compoundingFrequency,
    time
) {
    return (
        principalAmount *
        (1 + interestRate / compoundingFrequency) **
            (compoundingFrequency * time)
    );
}
console.log(compoundInterest(1000, 10, 10, 2));
