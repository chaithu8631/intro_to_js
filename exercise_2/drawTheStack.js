function a(number) {
  return b(number);
}

function b(number) {
  return c(number);
}

function c(number) {
  return d(number);
}

function d(number) {
  return number + 1;
}

console.log(a(5));

/**
 a(5) -> b(5) -> 6
 b(5) -> c(5) -> 6
 c(5) -> d(5) -> 6
 d(5) -> 6 
 */