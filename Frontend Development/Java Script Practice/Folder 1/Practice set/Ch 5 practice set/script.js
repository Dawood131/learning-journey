// Q # 1

// let arr = [1, 3, 4, 5, 6, 4]
// let a = arr.push(5, 33)
// console.log(arr)

// Q # 2

let arr2 = [2, 4, 6, 5, 10, 7, 8, 15, 25, 40, 100]
let n = arr2.filter((x) => {
    return x % 10 === 0
})
console.log(n)

// Q # 3

let arr3 = [2, 4, 6, 5, 10, 7, 8, 15, 25, 40, 100]

let nn = arr3.map((y) => {
    return y * y
})
console.log(nn)

// Q # 4

let natural = [1, 2, 3, 4, 5, 6, 7, 8, 9]
let nat = natural.reduce((x1, x2) => {
    return x1 * x2
})
console.log(nat)
