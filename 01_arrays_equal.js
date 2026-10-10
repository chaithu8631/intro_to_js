// Examples:
//
// areEqual([1, 2, 3, 4], [1, 2, 3, 4]) => true
// areEqual([1, 2, 3], [1, 2, 3, 4]) => false
// areEqual([1, 2, 3], [1, 3, 2]) => false
// areEqual([1, [22], 3], [1, [22], 3]) => true
//
// Do not modify the input parameters.

function areEqual(array1, array2) {

    if (array1.length !== array2.length) return false;

    for (let i = 0; i < array1.length; i++) {
        if(array1[i].length !== undefined) return areEqual(array1[i],array2[i]);
        if(array1[i]!==array2[i]) {
            return false;
        }
    }
    return true;
}

console.log(areEqual([1, 2, 3, 4], [1, 2, 3, 4]))
console.log(areEqual([1, 2, 3], [1, 2, 3, 4]))
console.log(areEqual([1, 2, 3], [1, 3, 2]))
console.log(areEqual([1, [22], 3], [1, [22], 3]))