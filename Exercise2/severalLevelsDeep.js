function sqr(number){
    console.log("Third Level Begin");
    const value = number ** 2;
    console.log("Square Value:" + value);
    console.log("Third Level End");
    return value;
}
function sqrt(number){
    console.log("Second Level Begin");
    const value = sqr(number) ** 0.5;
    console.log("Square Root Value:" + value);
    console.log("Second Level End");
    return value; 
}
function absolute(number){
    console.log("First Level Begin");
    console.log("Original:" + number);
    const value = sqrt(number);
    console.log("Absolute:" + value);
    console.log("First Level End");
    return value;
}

console.log(absolute(-5));

