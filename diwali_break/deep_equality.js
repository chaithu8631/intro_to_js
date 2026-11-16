function checkString(str1, str2) {
  return str1 === str2;
}

function checkNumber(number1, number2) {
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
  if (!isLengthSame(obj1, obj2)) return false;
  if (!isKeysSame(Object.keys(obj1), Object.keys(obj2))) return false;

  for (key in obj1) {
    const isEqual = isEquals(obj1[key], obj2[key]);
    if (!isEqual) return false;
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

const testCases = [
  {
    title: "Same Numbers",
    value1: 1,
    value2: 1,
    expected: true,
  },
  {
    title: "Same Characters",
    value1: "a",
    value2: "a",
    expected: true,
  },
  {
    title: "Empty Arrays",
    value1: [],
    value2: [],
    expected: true,
  },
  {
    title: "Same Arrays",
    value1: [1],
    value2: [1],
    expected: true,
  },
  {
    title: "Different Arrays",
    value1: [1, 2],
    value2: [1],
    expected: false,
  },
  {
    title: "Different number and string",
    value1: 1,
    value2: "1",
    expected: false,
  },
  {
    title: "Same Objects",
    value1: { a: 1 },
    value2: { a: 1 },
    expected: true,
  },
  {
    title: "Different Object properties",
    value1: { a: 1 },
    value2: { b: 1 },
    expected: false,
  },
  {
    title: "Same Array in Object",
    value1: { a: [1] },
    value2: { a: [1] },
    expected: true,
  },
  {
    title: "Same Object in Object",
    value1: { a: { b: 1 } },
    value2: { a: { b: 1 } },
    expected: true,
  },
  {
    title: "Same Object,Array in Object",
    value1: { a: { b: 1 }, c: [8, 6, 3, 1] },
    value2: { a: { b: 1 }, c: [8, 6, 3, 1] },
    expected: true,
  },
  {
    title: "undefined in Objects",
    value1: { a: undefined },
    value2: { b: 1 },
    expected: false,
  },
];
for (const testCase of testCases) {
  const result = isEquals(testCase.value1, testCase.value2);
  const icon = result === testCase.expected ? "✅" : "❌";
  console.log(icon, testCase.title);
}
