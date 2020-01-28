/**
 * Write a function that takes a string as input and reverse only the vowels of a string.
 */

const reverseString = x => x.split('').reverse().join('')

const isVowel = c => !!c.match(/[aeiou]/i)

const replaceCharInString = (x, c, pos) => `${x.substring(0, pos)}${c}${x.substring(pos + 1, x.length)}`

const reverseVowels = x => {
  const reversed = reverseString(x)
  let res = x

  for (let i = 0; i < x.length; i++) {
    const currentChar = x[i]

    if (isVowel(currentChar)) {
      res = replaceCharInString(res, reversed[i], i)
    }
  }

  return res
}

console.log(reverseVowels(''))
console.log(reverseVowels('1234bcdef'))
console.log(reverseVowels('aeiou111aaa222111fff54321'))
console.log(reverseVowels('aeiou111aeiou'))
