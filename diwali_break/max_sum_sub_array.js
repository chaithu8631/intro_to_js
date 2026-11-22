function arraySum(numbers) {
  let sum = 0;
  for (const number of numbers) sum += number;
  return sum;
}

function maxSubArray(numbers) {
  if (numbers.length === 0) return { subarray: [], maxSum: 0 };

  let maxSum = arraySum(numbers);
  let subStart = 0;
  let subEnd = numbers.length - 1;

  for (let j = 0; j < numbers.length; j++) {
    for (let k = j; k < numbers.length; k++) {
      const currentSum = arraySum(numbers.slice(j, k + 1));
      if (currentSum > maxSum) {
        maxSum = currentSum;
        subStart = j;
        subEnd = k;
      }
    }
  }

  return {
    subarray: numbers.slice(subStart, subEnd + 1),
    maxSum: maxSum,
  };
}
const arr = [-4, 3, -2, -1, 3];
const result = maxSubArray(arr);

console.log("Subarray:", result.subarray);
console.log(`Sum: ${result.maxSum}`);

//[1,2,3,4]:[
//          [1],[1,2],[1,2,3],[1,2,3,4],
//          [2],[2,3],[2,3,4]
//          [3],[3,4]
//          [4]
//        ]
