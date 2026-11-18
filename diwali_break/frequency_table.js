function isExist(element, table) {
  for (const item of Object.keys(table)) {
    // console.log(element, item);
    // console.log(element == item);
    if (item === element) return true;
  }
  return false;
}
function getFrequency(array) {
  const frequency = {};
  for (const element of array) {
    // console.log(element);
    
    if (isExist(element, frequency)) {
      frequency[element] = frequency[element] + 1;
    } else frequency[element] = 1;
  }
  return frequency;
}
const array = ["apple", "banana", "apple", "apple", "orange", "banana"];
const array1 = [1, 2, 3, 1, 2, 4, 1, 2, 3, 4];
console.log(getFrequency(array));
// console.log(getFrequency(array1));
