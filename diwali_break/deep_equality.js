function type(value) {
  if (Array.isArray(value)) return "array";
  if (value === null) return "null";
  if (Number.isNaN(value)) return "NaN";
  return typeof value;
}

function areLengthsEqual(obj1, obj2) {
  return Object.keys(obj1).length === Object.keys(obj2).length;
}

function areKeysEqual(keySet1, keySet2) {
  for (const key of keySet1) {
    if (!keySet2.includes(key)) return false;
  }
  return true;
}

function areObjectsEqual(value1, value2) {
  if (!areLengthsEqual(value1, value2)) return false;
  if (!areKeysEqual(Object.keys(value1), Object.keys(value2))) return false;

  for (const key in value1) {
    if (!areEqual(value1[key], value2[key])) return false;
  }
  return true;
}

function areEqual(value1, value2) {
  if (value1 === value2) return true;
  if (!(type(value1) === type(value2))) return false;
  switch (type(value1)) {
    case "array":
      return areObjectsEqual(value1, value2);
    case "object":
      return areObjectsEqual(value1, value2);
    case "NaN":
      return true;
  }
  return areValuesEqual(value1, value2);
}

function areValuesEqual(value1, value2) {
  return value1 === value2;
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
    {
      title: "two null",
      value1: null,
      value2: null,
      expected: true,
    },
    {
      title: "two NaN",
      value1: NaN,
      value2: NaN,
      expected: true,
    },
    {
      title: "two undefined",
      value1: undefined,
      value2: undefined,
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
