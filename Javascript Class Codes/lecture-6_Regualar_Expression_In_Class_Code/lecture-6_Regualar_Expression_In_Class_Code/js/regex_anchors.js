const regexAnchor = /^hello/;
console.log(regexAnchor.test("hello world")); // true
console.log(regexAnchor.test("say hello")); // false

const regex2 = /world$/;
console.log(regex2.test("hello world")); // true

console.log(regex2.test("world is big")); // false
