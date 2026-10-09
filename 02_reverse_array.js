// reverse([1, 2, 3]) => [3, 2, 1]
// reverse([]) => []
//
// Do not modify the input array.

function reverse(array) {
    const reverseArray = [];
    for (let i = array.length - 1; i >= 0; i--) {
        reverseArray[array.length - 1 - i] = array[i];
    }
    return reverseArray;
}
const array = [1, 2, 3, 4, 5];

console.log(reverse(array));
