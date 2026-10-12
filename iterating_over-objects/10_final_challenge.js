const inventory = {
  pencils: 12,
  notebooks: 5,
  erasers: 8,
};

// Try to solve this using Object.entries and for...of.
let total = 0;
for(const item of Object.entries(inventory)) {
    console.log(item[0],item[1]);
    total+=item[1];
}
console.log("total",total);
