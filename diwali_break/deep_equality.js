function checkString(str1, str2) {
  console.log('String');
  
  if (str1.length !== str2.length) return false;
  return str1 === str2;
}

function checkNumber(number1, number2) {
  console.log('Number');
  
  return number1 === number2;
}

function isLengthSame(obj1, obj2) {
  return Object.keys(obj1).length === Object.keys(obj2).length;
}

function isKeysSame(keySet1, keySet2) {
  for (const i in keySet1) {
    if (keySet1[i] !== keySet2[i]) return false;
  }
  return true;
}

function checkObject(obj1, obj2) {
  console.log('Object');

  if (!isLengthSame(obj1, obj2)) return false;
  if (!isKeysSame(Object.keys(obj1), Object.keys(obj2))) return false;

  for (key in obj1) {
    const isEqual = isEquals(obj1[key],obj2[key]);
    if(!isEqual) return false;
  }
  return true;
}

function isEquals(value1, value2) {
  if (typeof value1 === "object" && typeof value2 === "object")
    return checkObject(value1, value2);
  if (typeof value1 === "string" && typeof value2 === "string")
    return checkString(value1, value2);
  if (typeof value1 === "number" && typeof value2 === "number")
    return checkNumber(value1, value2);
  return false;
}

// const obj = { a: 5, d: { e: 8 }, b: 10, c: 5 };
// const obj1 = { a: 5, d: { e: 8 }, b: 10, c: 5 };
// const obj = { a: 5, d: { e: 8 }, b: 10, c: 5 };
// const obj1 = { a: 5, d: { e: 8, f: 9 }, b: 10, c: 5 };
// const obj = { a: 5, d: { e: 8 }, b: 10, c: 5 };
// const obj1 = { a: 5, d: { e: 9 }, b: 10, c: 5 };
// const obj = { a: 5, d: { e: 9 }, b: 10, c: 9 };
// const obj1 = { a: 5, d: { e: 9 }, b: 10, c: 5 };
// const obj = { a: 5, d: 9, b: 10, c: 9 };
// const obj1 = { a: 5, d: { e: 9 }, b: 10, c: 5 };
const obj = { a: 5, d: { e: 9, f: [1, 3, [5, 7]] }, b: 10, c: 5 };
const obj1 = { a: 5, d: { e: 9, f: [1, 3, [5, 7]] }, b: 10, c: 5 };

console.log(isEquals(1, 1)); // true
console.log(isEquals("a", "a")); // true
console.log(isEquals([], [])); // true
console.log(isEquals([1], [1])); // true
console.log(isEquals([1], [1, 2])); // false
console.log(isEquals(1, "1")); // false

console.log(isEquals({ a: 1 }, { a: 1 })); // true
console.log(isEquals({ a: 1 }, { b: 1 })); // false

console.log(isEquals({ a: [1] }, { a: [1] })); // true

console.log(isEquals({ a: { b: 1 } }, { a: { b: 1 } })); // true

console.log(isEquals(obj, obj1));

console.log(isEquals({ a: undefined }, { b: 1 }));
console.log(isEquals({ b: 1 }, { a: undefined }));
