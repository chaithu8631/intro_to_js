// Find the first number greater than 100 that is divisible by both 7 and 13.

let number = 101;
while(number>100) {
    if(number%7===0&&number%13===0)
    {
        console.log(number);
        break;
    }
    number++;
}
