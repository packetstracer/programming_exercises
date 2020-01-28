function areParenthesisCoherent (input) {
  let currentOpened = 0
  let i = 0

  while (currentOpened >= 0 && i < input.length) {
    const currentChar = input.charAt(i)

    if (currentChar === '(') {
      currentOpened++
    } else if (currentChar === ')') {
      currentOpened--
    }

    i++
  }

  return currentOpened === 0 ? true : false
}

console.log(areParenthesisCoherent('('))
console.log(areParenthesisCoherent('()'))
console.log(areParenthesisCoherent('())()'))
console.log(areParenthesisCoherent(')'))
console.log(areParenthesisCoherent('( () (() ()) )'))
console.log(areParenthesisCoherent('([]true askdjf2332´p})'))