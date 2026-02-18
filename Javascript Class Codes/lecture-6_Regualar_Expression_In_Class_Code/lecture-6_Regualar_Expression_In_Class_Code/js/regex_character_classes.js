console.log(/\d/.test("123")); // true (digit)
console.log(/\D/.test("abc")); // true (non-digit)
console.log(/\w/.test("hello123")); // true (alphanumeric)
console.log(/\W/.test("@#$!")); // true (non-alphanumeric)

console.log(/\d/.test("a")); // false
console.log(/\D/.test("1")); // flase
console.log(/\w/.test("@")); // false
console.log(/\W/.test("a")); // false