const rectangle = {
    width: 100,
    height: 50,
    color: "red",
};

// const properties = Object.keys(rectangle);
// for(property of properties) {
//     console.log(property);
// }

for(property in rectangle) {
    console.log(property);
}