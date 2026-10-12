const prices = {
  apple: 20,
  banana: 10,
  orange: 15,
};
// Use Object.entries and for...of to print each fruit and its price.

// Use destructuring to obtain the name and price in each iteration.

const fruits = Object.entries(prices);
for(const fruit of fruits) {
    console.log(fruit);
}