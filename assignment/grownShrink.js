function starLine(number) {
    // if(number === 0){
    //     return "";
    // }
    // return "*" + starLine(number-1);
    return number === 0 
    ? "\n" 
    : "*" + starLine(number - 1);
}

function secondHalf(number) {
    // if (number === 0){
    //     return "";
    // }
    // const line = starLine(number);
    // return line + secondHalf(number-1);
    return number === 0 
    ? "" 
    : starLine(number) + secondHalf(number - 1);
}

function firstHalf(number) {
    // if (number === 0){
    //     return "";
    // }
    // const line = starLine(number);
    // return firstHalf(number-1) + line ;
    return number === 0 
    ? "" 
    : firstHalf(number - 1) + starLine(number);
}

function starPattern(number) {
    // if(number === 0){
    //     return "";
    // }
    // const firstHalf = firstHalf(number);
    // const secondHalf = secondHalf(number-1);
    // return firstHalf + secondHalf;
    return number === 0 
    ? "" 
    : firstHalf(number) + secondHalf(number - 1);
}

console.log(starPattern(5));
console.log(starPattern(4));
console.log(starPattern(3));
console.log(starPattern(2));
console.log(starPattern(1));
console.log(starPattern(0));
