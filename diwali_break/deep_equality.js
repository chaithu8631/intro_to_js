function type(value) {
  if (Array.isArray(value)) return "array";
  if (value === null) return "null";
  if (Number.isNaN(value)) return "NaN";
  return typeof value;
}

console.log(type(2));
console.log(type("hi"));
console.log(type(NaN));
console.log(type(null));
console.log(type([1,2,3,4]));
console.log(type({a:1}));
console.log(type(true));
