const regexGrouping = /(hello) (world)/;
const match = "hello world".match(regexGrouping);
console.log(match[1]); // "hello"
console.log(match[2]); // "world"
console.log(match); // an array

const regexGrouping2 = /(hello) (world)/;
const match2 = "hello".match(regexGrouping);
console.log(match2); // null