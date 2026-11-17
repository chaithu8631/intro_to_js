const { areEqual } = require("./deep_equality");

function test(title, expected, value1, value2) {
  const result = areEqual(value1, value2);
  const icon = result === expected ? "✅" : "❌";
  console.log(icon, title);
}
function testNumbers() {
  test("Same Positive Numbers should be Equal", true, 1, 1);
  test("Same Negative Numbers should be Equal", true, -5, -5);
  test("Different Numbers should be Unequal", false, 3, 5);
  test("Different Numbers should be Unequal", false, 8, -9);
}
function testBooleanDifferently() {
  test("Boolean and Number should be Unequal", false, false, 5);
  test("Boolean and String should be Unequal", false, true, "true");
  test("Boolean and Array should be Unequal", false, true, [1, 2, 3]);
  test("Boolean and Object should be Unequal", false, false, { a: false });
  test("Boolean and NaN should be Unequal", false, false, NaN);
  test("Boolean and undefined should be Unequal", false, false, undefined);
  test("Boolean and null should be Unequal", false, false, null);
}
function testNumberDifferently() {
  test("Number and Boolean should be Unequal", false, 5, true);
  test("Number and String should be Unequal", false, 5, "true");
  test("Number and Array should be Unequal", false, 5, [1, 2, 3]);
  test("Number and Object should be Unequal", false, 5, { a: 10 });
  test("Number and NaN should be Unequal", false, 5, NaN);
  test("Number and undefined should be Unequal", false, 5, undefined);
  test("Number and null should be Unequal", false, 5, null);
}
function testStringDifferently() {
  test("String and Boolean should be Unequal", false, "Hello", true);
  test("String and Number should be Unequal", false, "Hello", 86);
  test("String and Array should be Unequal", false, "Hello", [1, 2, 3]);
  test("String and Object should be Unequal", false, "Hello", { a: "hii" });
  test("String and NaN should be Unequal", false, "Hello", NaN);
  test("String and undefined should be Unequal", false, "Hello", undefined);
  test("String and null should be Unequal", false, "Hello", null);
}
function testArrayDifferently() {
  test("Array and Boolean should be Unequal", false, [1, 2, 3], true);
  test("Array and Number should be Unequal", false, [1, 2, 3], 86);
  test("Array and String should be Unequal", false, [1, 2, 3], "lalala");
  test("Array and Object should be Unequal", false, [1, 2, 3], { a: "hii" });
  test("Array and NaN should be Unequal", false, [1, 2, 3], NaN);
  test("Array and undefined should be Unequal", false, [1, 2, 3], undefined);
  test("Array and null should be Unequal", false, [1, 2, 3], null);
}
function testObjectDifferently() {
  test("Object and Boolean should be Unequal", false, { a: 86, b: 5 }, true);
  test("Object and Number should be Unequal", false, { a: 86, b: 5 }, 86);
  test("Object and String should be Unequal", false, { a: 86, b: 5 }, "lalala");
  test(
    "Object and Array should be Unequal",
    false,
    { a: 86, b: 5 },
    [8, 6, 3, 1],
  );
  test("Object and NaN should be Unequal", false, { a: 86, b: 5 }, NaN);
  test(
    "Object and undefined should be Unequal",
    false,
    { a: 86, b: 5 },
    undefined,
  );
  test("Object and null should be Unequal", false, { a: 86, b: 5 }, null);
}
function testNaNDifferently() {
  test("NaN and Boolean should be Unequal", false, NaN, true);
  test("NaN and Number should be Unequal", false, NaN, 86);
  test("NaN and String should be Unequal", false, NaN, "lalala");
  test("NaN and Array should be Unequal", false, NaN, [8, 6, 3, 1]);
  test("NaN and Object should be Unequal", false, NaN, { a: 60, b: 4 });
  test("NaN and undefined should be Unequal", false, NaN, undefined);
  test("NaN and null should be Unequal", false, NaN, null);
}
function testUndefinedDifferently() {
  test("undefined and Boolean should be Unequal", false, undefined, true);
  test("undefined and Number should be Unequal", false, undefined, 86);
  test("undefined and String should be Unequal", false, undefined, "lalala");
  test("undefined and Array should be Unequal", false, undefined, [8, 6, 3, 1]);
  test("undefined and Object should be Unequal", false, undefined, {
    a: 60,
    b: 4,
  });
  test("undefined and NaN should be Unequal", false, undefined, NaN);
  test("undefined and null should be Unequal", false, undefined, null);
}
function testNullDifferently() {
  test("null and Boolean should be Unequal", false, null, true);
  test("null and Number should be Unequal", false, null, 86);
  test("null and String should be Unequal", false, null, "lalala");
  test("null and Array should be Unequal", false, null, [8, 6, 3, 1]);
  test("null and Object should be Unequal", false, null, { a: 60, b: 4 });
  test("null and NaN should be Unequal", false, null, NaN);
  test("null and undefined should be Unequal", false, null, undefined);
}
function testDifferentTypes() {
  testBooleanDifferently();
  testNumberDifferently();
  testStringDifferently();
  testArrayDifferently();
  testObjectDifferently();
  testNaNDifferently();
  testUndefinedDifferently();
  testNullDifferently();
}
function testArrays() {
  test("Empty arrays should be equal", true, [], []);
  test("Empty nested arrays should be equal", true, [[]], [[]]);
  test("Empty array and non-empty array should be Unequal", false, [], [8, 6]);
  test("Same elements of arrays should be Equal", true, [5, 8], [5, 8]);
  test(
    "Same Nested array elements of arrays should be Equal",
    true,
    [5, [6, 7]],
    [5, [6, 7]],
  );
  test(
    "Different elements of same length of arrays should be Unequal",
    false,
    [3, 5, 8],
    [3, 2, 4],
  );
  test(
    "Different Nested array elements of arrays should be Unequal",
    false,
    [5, [8, 6]],
    [5, [3, 1]],
  );
}
function testObjects() {
  test("Empty objects should be equal", true, {}, {});
  test(
    "Empty object and non-empty object should be Unequal",
    false,
    {},
    { a: 5 },
  );
  test(
    "Same values of objects should be Equal",
    true,
    { a: 5, b: 2 },
    { a: 5, b: 2 },
  );
  test(
    "Same Nested object values should be Equal",
    true,
    { a: 5, b: { c: 6, d: 7 } },
    { a: 5, b: { c: 6, d: 7 } },
  );
  test(
    "Same Nested array elements should be Equal",
    true,
    { a: 5, b: [5, 6, 7, 8] },
    { a: 5, b: [5, 6, 7, 8] },
  );
  test(
    "Different values of same keys of objects should be Unequal",
    false,
    { a: 5, b: 6 },
    { a: 5, b: 8 },
  );
  test(
    "Different keys of objects should be Unequal",
    false,
    { a: 5 },
    { b: 5 },
  );
  test(
    "Different Nested object values should be Unequal",
    false,
    { a: 5, b: { c: 6, d: 7 } },
    { a: 5, b: { c: 6, d: 8 } },
  );
  test(
    "Different Nested array elements should be Unequal",
    false,
    { a: 5, b: [3, 4, 5, 6] },
    { a: 5, b: [7, 8, 9, 3] },
  );
  test(
    "undefined as value in object should be Unequal",
    false,
    { a: undefined, b: [7, 8, 9, 3] },
    { c: 5, b: [7, 8, 9, 3] },
  );
}
function testStrings() {
  test("Empty Strings should be equal", true, "", "");
  test("Empty Strings and non-empty should be Unequal", false, "", "hii");
  test("Same Strings should be equal", true, "a", "a");
  test("Different Strings should be Unequal", false, "Hello", "Hi");
}
function testBoolean() {
  test("both true should be Equal", true, true, true);
  test("both false should be Equal", true, false, false);
  test("a true & false should be Unequal", false, true, false);
  test("a false & true should be Unequal", false, false, true);
}
function testUndefinedNullNaN() {
  test("both undefined should be Equal", true, undefined, undefined);
  test("both null should be Equal", true, null, null);
  test("both NaN should be Equal", true, NaN, NaN);
}
function main() {
  testBoolean();
  testNumbers();
  testStrings();
  testArrays();
  testObjects();
  testUndefinedNullNaN();
  testDifferentTypes();
}
main();
