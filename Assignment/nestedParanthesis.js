function paranthesis(number){
    if(number === 0){
        return "";
    }
    return "(" + paranthesis(number-1) + ")";
}

console.log(paranthesis(5));
console.log(paranthesis(4));
console.log(paranthesis(3));
console.log(paranthesis(2));
console.log(paranthesis(1));