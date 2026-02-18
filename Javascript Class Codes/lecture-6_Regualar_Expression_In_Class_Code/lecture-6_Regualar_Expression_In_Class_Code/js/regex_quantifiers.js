console.log(/a{2,4}/.test("aaa")); // true
console.log(/b+/.test("bbbbb")); // true
console.log(/c*/.test("ccc")); // true

console.log(/a{2,4}/.test("a")); // false
console.log(/b+/.test("")); // false
console.log(/c*/.test("")); // true