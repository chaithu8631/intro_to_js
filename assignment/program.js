// //1. A named calculation
// const width = 10;
// const height = 5;
// let area = width * height;
// console.log(area);

// //2. Change the value
// let score = 0;
// score = 10;
// score = 20;
// score = 30;


// "Hello\nWorld";
// console.log("Hello\nWorld");
// console.log();
// console.log(console.log());

// console.log(5 + 3);
// 5 + 3;
// console.log("Hello");

// const c = 10;
// let b = 20;

// let a = b = c + 1;

// console.log("a="+a+" ,b="+b+" ,c="+c);

//                 //const is replaced with "let" because:
//                     // score = score + 5;
//                     //       ^

//                     // TypeError: Assignment to constant variable.
// let score = 10;

// score = score + 5;
// console.log(score);

//                 //let age = 21; is replaced with "age = 21;" because:
//                     // let age = 21;
//                     // ^

//                     // SyntaxError: Identifier 'age' has already been declared
// let age = 20;

// age = 21;

// console.log(age);


const number = 86;
// const number = 31;

const onesValue = number % 10;
// const round = onesValue >= 5 ? number + 10 - onesValue : number - onesValue ;

let round = number - onesValue;

if(onesValue >= 5){
    round += 10;
}
console.log(round);


let score = 10;
let bonus = 5;

score = score + bonus;
bonus = score * 2;

if (bonus > 20){
    score = score + 3;
    console.log("A", score);
}
else{
    score = score - 3;
    console.log("B", score);
}
score = score + bonus;

console.log(score);
console.log(bonus);


const a = 5 & 3;
const b = 5 << 1;

console.log("a="+a+" ,b="+b);


console.log(Boolean(0));
console.log(Boolean("0"));
console.log(Boolean(""));




