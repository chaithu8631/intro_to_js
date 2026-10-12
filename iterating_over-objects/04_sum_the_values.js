const scores = {
  Anu: 10,
  Rahul: 20,
  Meera: 30,
};
// Use Object.values and a loop to calculate the total score.

let total = 0;
for (const score in scores) {
    total+=scores[score];
}
console.log(total);
