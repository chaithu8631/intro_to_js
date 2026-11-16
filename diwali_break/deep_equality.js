function checkKeys(obj1keys, obj2keys) {
  for (const i in obj1keys) {
    if (obj1keys[i] !== obj2keys[i]) return false;
  }
  return true;
}
function checkObject(obj1, obj2) {
  if (Object.keys(obj1).length !== Object.keys(obj2).length) return false;
  if (!checkKeys(Object.keys(obj1), Object.keys(obj2))) return false;
  for (key in obj1) {
    if (typeof obj1[key] === "object" && typeof obj2[key] === "object")
      if (!checkObject(obj1[key], obj2[key])) return false;
    if (obj1[key] !== obj2[key]) return false;
  }
  return true;
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
const obj = { a: 5, d: 9, b: 10, c: 9 };
const obj1 = { a: 5, d: { e: 9 }, b: 10, c: 5 };

console.log(checkObject(obj, obj1));
// console.log(checkObject({ a: undefined }, { b: 1 }));
// console.log(checkObject({ b: 1 }, { a: undefined }));
