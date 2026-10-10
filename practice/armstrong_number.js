function isArmStrong(number) {
    return number === sumOfCubeOfNumbers(number, 0);
}
function sumOfCubeOfNumbers(data) {
    if(0 < data){
        const remainder = data % 10;
        return cubeOfNumber(remainder) + sumOfCubeOfNumbers((data-remainder)/10);
    }return 0;
}
function cubeOfNumber(number) {
    return number * number * number;
}
console.log(isArmStrong(153));