// try solving this first with Object.keys and for...of. Then try it with for...in
const rectangle = {
    width: 100,
    height: 50,
    color: "red",
};

// const properties = Object.keys(rectangle);
// for(property of properties) {
//     console.log(property, rectangle[property]);
// }

for (const property in rectangle) {
    console.log(property, rectangle[property]);
}