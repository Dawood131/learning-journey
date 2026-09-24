// Q # 1
let a = `Hi my name is Dawood\n`
console.log(a.length)

// Q # 2
let h = "HELLO"
console.log(h.toLowerCase())
// Q # 3

let s = "Please give me 1000"
console.log(s.length)
console.log(s.slice(15))
// Q # 4
let na = "Dawood"
console.log(na[4])
na[4] = "n"
// This is not possibe


// Q # 5

let obj = {
    real_name: "Dawood",
    age: 18,
    marks: 100
}
for (const key in obj) {
    console.log(key + " is " + obj[key])
}

// // Q # 6

// let object = [" a, b ,c, d , e"]
// for (let i = 0; i < object.length; i++) {
//     console.log(i)
// }