function getType(value) {
  if (Array.isArray(value)) return "array";
  if (value === null) return "null";
  return typeof value;
}
function areLengthsSame(obj1, obj2) {
  return Object.keys(obj1).length === Object.keys(obj2).length;
}
function areKeysSame(keySet1, keySet2) {
  for (const key of keySet1) {
    if (!keySet2.includes(key)) return false;
  }
  return true;
}
function areEqual(value1, value2) {
  if (!(getType(value1) === getType(value2))) return false;
  if (getType(value1) !== "object" && getType(value1) !== "array")
    return value1 === value2;

  if (!areLengthsSame(value1, value2)) return false;
  if (!areKeysSame(Object.keys(value1), Object.keys(value2))) return false;

  for (const key in value1) {
    if (!areEqual(value1[key], value2[key])) return false;
  }
  return true;
}

function main() {
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
      value1: { a: 1, b: 2 },
      value2: { b: 2, a: 1 },
      expected: true,
    },
    {
      title: "obj and arr",
      value1: [1, 2],
      value2: [1, 2, 3],
      expected: false,
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
    {
      title: "undefined in Objects",
      value1: { a: undefined },
      value2: { a: undefined },
      expected: true,
    },
  ];
  for (const testCase of testCases) {
    const result = areEqual(testCase.value1, testCase.value2);
    const icon = result === testCase.expected ? "✅" : "❌";
    console.log(icon, testCase.title);
  }
}


main();