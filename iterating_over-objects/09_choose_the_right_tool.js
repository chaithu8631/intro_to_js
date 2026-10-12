// Choose the right tool#
// For each task, choose the most appropriate API or loop and explain your choice.


// Print every element of an array.
const numbers = [10, 20, 30, 40, 50];
for(const number of numbers) {
    console.log(number);
}

// Get an array containing the property names of an object.
const device = {
    brand: "Acme",
    model: "X1",
    year: 2025,
    working: true,
};
const properties = Object.keys(device);
console.log(properties);

// Print both the property names and values of an object.
const prices = {
    apple: 20,
    banana: 10,
    orange: 15,
};
for(const fruit of Object.entries(prices)) {
    console.log(fruit);
}

// Get an array containing only the values of an object’s properties.
const values = Object.values(device);
console.log(values);

// Visit the property names of an object without first creating an array of keys.
for(const fruit in prices) {
    console.log(fruit);
}