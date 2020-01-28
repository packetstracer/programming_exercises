/**
 * Given a non-empty array of integers,
 * every element appears twice except for one. Find that single one.
 */

function single(x) {
  const foundOnce = x.reduce(
    (acc, item) => acc.includes(item)
      ? acc.filter(accItem => accItem !== item)
      : [ ...acc, item ],
    []
  )

  return foundOnce.length > 0 ? foundOnce[0] : false
}

console.log(single([1]));
console.log(single([1,2,1]));
console.log(single([1,2,2]));
console.log(single([1,2,3,4,5,4,3,2,1]));
console.log(single([1,1,1,1,2]));
