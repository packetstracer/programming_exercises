/**
 * Write a function that takes a string as input and return it's reverse.
 */
const reverseString = (x) => x.split('').reverse().join('')

console.log(reverseString('foo'))
console.log(reverseString('1234 5678'))
console.log(reverseString('[]  {}'))