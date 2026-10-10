// findLastIndex(["apple", "cake", "tea", "coffee", "tea", "pen"], "tea") => 4
//
// Do not modify the input array.

function findLastIndex(array, element) {
    for (let i = array.length - 1; i >= 0; i--) {
        if(array[i] === element)
            return i;
    }
    return -1;
}

console.log(findLastIndex(["apple", "cake", "tea", "coffee", "tea", "pen"], "tea"));