// function add(x,y) {
//   return x + y;
// };

const add = function (x, y) {
  return subtract(x, y);
};

const subtract = function (x, y) {
  return x - y;
};

const multiply = function (x, y) {
  return x * y;
};

const a = add(10, 20);
const b = subtract(50, 10);
const c = multiply(5, 6);

console.log(a);
console.log(b);
console.log(c);
