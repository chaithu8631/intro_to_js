function add(number1, number2){
    return number1 + number2;
}

function double(number) {
  return number * 2;
}

function addOne(number) {
  return number + 1;
}

console.log(add(double(4), addOne(4)));
//double(4) = 8, addOne(4) = 5; add(8, 5) = 13
