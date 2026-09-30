
// function isEven(number) {
//   number % 2 === 0;
// }

function isEven(number) {
  return number % 2 === 0;
}
// function add(first, second) {
//   return first + second;
// }
// console.log(isEven(5));
// console.log(isEven(14));
// console.log(isEven(23));
// console.log(isEven(0));
// console.log(isEven(101));
// console.log(isEven(200));

// const result = isEven(12);

// console.log(result);

function describeEven(number) {
  const description = isEven(number) ? "even" : "odd";

  return `${number} is ${description}`;
}

console.log(describeEven(12));
console.log(describeEven(17));
console.log(describeEven(24));

function test() {
  const number = 12;

  console.log(number);
}

test();


function isOdd(number) {
  return !isEven(number);
}

console.log(isOdd(3));
console.log(isOdd(4));
console.log(isOdd(17));
console.log(isOdd(20));

function classify(number) {
  if (number === 0) {
    return "zero";
  }

  if (number > 0) {
    return "positive";
  }

  return "negative";
}

console.log(classify(15));
console.log(classify(-3));
console.log(classify(0));






