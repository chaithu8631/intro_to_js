// filterAbove([6, 2, 3, 1, 4, 7], 3) => [6, 4, 7]
// filterAbove([1, 2, 3], 4) => []
//
// Do not modify the input array.

function filterAbove(array, threshold) {
    const filterArray = []
    for(let i =0;i<array.length;i++){
        if(array[i]>threshold){
            filterArray.push(array[i]);
        }
    }
    return filterArray;
}

console.log(filterAbove([1,3,2,4,5,8,7,6,9], 3));
