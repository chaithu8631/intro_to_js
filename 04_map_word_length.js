// mapLengths(["apple", "cat", "Four"]) => [5, 3, 4]
//
// Do not modify the input array.

function mapLengths(words) {
    const wordLength = [];
    for(let i=0;i<words.length;i++) {
        wordLength[i]=words[i].length;
    }
    return wordLength;
}

console.log(mapLengths(["apple", "cat", "Four"]));