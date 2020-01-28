let a = [1, 2, 3, 4, 5, 6]

for (let i = 0; i < a.length; i++) {
  console.log(a[i])
}

for (i in a) {
  console.log(a[i])
}

for (let item of a) {
  console.log(item)
}

a.forEach(item => {
  console.log(item)
})

let j = 0

do {
  console.log(a[j])
  j++
} while (j < a.length)

let res = a
  .map((item, i) => item + i)
  .filter((item, i) => i < a.length / 2)
  .reduce((acc, item, i) => acc + item, 0)


console.log(res)