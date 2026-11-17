function type(value) {
  if (Array.isArray(value)) return "array";
  if (value === null) return "null";
  if (Number.isNaN(value)) return "NaN";
  return typeof value;
}

function areLengthsEqual(value1, value2) {
  return value1.length === value2.length;
}

function areKeysEqual(keySet1, keySet2) {
  for (const key of keySet1) {
    if (!keySet2.includes(key)) return false;
  }
  return true;
}

function areObjectsEqual(value1, value2) {
  const keySet1 = Object.keys(value1);
  const keySet2 = Object.keys(value2);
  if (!areLengthsEqual(keySet1, keySet2)) return false;
  if (!areKeysEqual(keySet1, keySet2)) return false;
  for (const key in value1) {
    if (!areEqual(value1[key], value2[key])) return false;
  }
  return true;
}

function areValuesEqual(value1, value2) {
  return value1 === value2;
}

export function areEqual(value1, value2) {
  if (value1 === value2) return true;
  if (!(type(value1) === type(value2))) return false;
  switch (type(value1)) {
    case "boolean":
    case "number":
    case "string":
      return areValuesEqual(value1, value2);
    case "array":
    case "object":
      return areObjectsEqual(value1, value2);
    case "NaN":
    case "undefined":
    case "null":  
      return true;
  }
  return areValuesEqual(value1, value2);
}