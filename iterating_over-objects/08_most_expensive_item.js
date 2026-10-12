const prices = {
  apple: 20,
  banana: 10,
  orange: 15,
  mango: 40,
};

// Find the name of the most expensive item and its price.

// Use Object.entries and a loop. Do not write separate comparisons for each fruit.

let expensive =["",0];
const fruits = Object.entries(prices);

for(const fruit of fruits) {
    if(fruit[1]>expensive[1]) expensive = fruit;
}

console.log(expensive);
