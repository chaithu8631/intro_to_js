function converter(decRep) {
    const binary = decRep % 2;
    return decRep > 0 ? converter((decRep - binary)/2 )+ "" + binary : 0 ;
}

console.log(converter(1));
console.log(converter(2));
console.log(converter(3));
console.log(converter(4));
console.log(converter(5));
console.log(converter(6));
console.log(converter(0));