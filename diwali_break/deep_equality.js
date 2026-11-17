function type(value) {
  if (Array.isArray(value)) return "array";
  if (value === null) return "null";
  if (Number.isNaN(value)) return "NaN";
  return typeof value;
}

function areLengthsEqual(value1, value2) {
  return value1.length === value2.length;
}

function areArraysEqual(array1, array2) {
  if (!areLengthsEqual(array1, array2)) return false;
  for (const index in array1) {
    if (!areEqual(array1[index], array2[index])) return false;
  }
  return true;
}

function areObjectsEqual(object1, object2) {
  if (!areLengthsEqual(Object.keys(object1), Object.keys(object2))) return false;
  for (const key in object1) {
    if (!(key in object2)) return false;
    if (!areEqual(object1[key], object2[key])) return false;
  }
  return true;
}

function areValuesEqual(value1, value2) {
  return value1 === value2;
}

function areEqual(value1, value2) {
  if (value1 === value2) return true;
  if (!(type(value1) === type(value2))) return false;
  switch (type(value1)) {
    case "boolean":
    case "number":
    case "string":
      return areValuesEqual(value1, value2);
    case "array":
      return areArraysEqual(value1, value2);
    case "object":
      return areObjectsEqual(value1, value2);
    case "NaN":
    case "undefined":
    case "null":
      return true;
  }
  return areValuesEqual(value1, value2);
}

module.exports = {
  areEqual,
};