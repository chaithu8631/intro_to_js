function isPalindrome(data) {
    return data === reverseNumber(data, 0);
}
function reverseNumber(number, result) {
    if (0 === number) return result;
    const remainder = number % 10;
    return reverseNumber((number - remainder) / 10, result * 10 + remainder);
}

console.log(isPalindrome(data));
