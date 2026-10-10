function describeNumber(number) {
  if (number === 0) {
    return "zero";
  }

  if (number > 0) {
    return "positive";
  }

  return "negative";
}

console.log(describeNumber(10));
console.log(describeNumber(-10));
console.log(describeNumber(0));

