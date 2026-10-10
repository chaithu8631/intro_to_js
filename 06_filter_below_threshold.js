// filterBelow([6, 2, 3, 1, 4, 7], 3) => [2, 1]
// filterBelow([1, 2, 3], 0) => []
//
// Do not modify the input array.

function filterBelow(array, threshold) {
    const filterArray = []
    for(let i =0;i<array.length;i++){
        if(array[i]<threshold){
            filterArray.push(array[i]);
        }
    }
    return filterArray;
}

console.log(filterBelow([6, 2, 3, 1, 4, 7], 3));
console.log(filterBelow([1, 2, 3], 0));
