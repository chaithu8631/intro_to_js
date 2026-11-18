function getFrequencyOfElement(element, array) {
  let frequency = 0;
  for (const item of array) {
    if (item === element) frequency++;
  }
  return frequency;
}
function getFrequencyTable(array) {
  const frequency = {};
  for (const element of array) {
    if (!(element in frequency)) {
      frequency[element] = getFrequencyOfElement(element,array);
    }
  }
  return frequency;
}
const stringArray = ["apple", "banana", "apple", "apple", "orange", "banana"];
const numberArray = [1, 2, 3, 1, 2, 4, 1, 2, 3, 4];
console.log(getFrequencyTable(stringArray));
console.log(getFrequencyTable(numberArray));
