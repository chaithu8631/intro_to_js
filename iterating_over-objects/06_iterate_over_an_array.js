const numbers = [10, 20, 30, 40, 50];

for(const number of numbers) {
    console.log(number);
}

for (const number in numbers) {
    console.log(number);
}

// for of fetches the values of the array
// whereas for in fetches the indices of the array