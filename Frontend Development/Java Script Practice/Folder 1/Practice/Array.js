// Problem # 1

let arr = [13, 22, 36, 43, 55, 45]
console.log(arr.length)

// Problem # 2

console.log(arr[0])
console.log(arr[5])

// Problem # 3

console.log(arr.pop(5))
console.log(arr)

// Problem # 4

console.log(arr[0])
console.log(arr.shift(0))
console.log(arr)

// Problem # 5

let su = [1, 2, 3, 4, 5]
let sum = su.reduce((_a, _v) =>
     _a + _v)
console.log(sum)

// [10, 20, 30] ke end me 40 add karo.
let ar = [10, 20, 30]
ar.push(40)
console.log(ar)

// [100, 200, 300] ka pehla element remove karo.

let re = [100, 200, 300];
re.shift()
console.log(re)

// [5, 10, 15, 20, 25] me se sirf [10, 15, 20] nikal kar dikhayo.

let are = [5, 10, 15, 20, 25]
console.log(are.slice(1, 4))

// [2, 4, 6, 8] ka sum nikalne ka method likho.

let add = [2, 4, 6, 8]
let ad = add.reduce((a, b) =>
     a + b
)
console.log(add)
console.log(ad)

// [1, 2, 3, 4, 5] me se sirf even numbers filter karo.

let even = [1, 2, 3, 4, 5]
let ev = even.filter((_n) =>
     _n % 2 === 0
)
console.log(ev)

