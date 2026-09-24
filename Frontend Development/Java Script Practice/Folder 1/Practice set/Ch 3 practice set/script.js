// Q # 1

let marks = {
    Dawood: 90,
    Rohan: 50,
    Subhan: 34
}
for (const key in marks) {
    // console.log("The marks of " + key + " is " + marks[key])
    console.log(`The marks of ${key} is ${marks[key]}`)
}

// Q # 2
let n = 5;
let a = (x) => {
    if (n == x) {
        return `Your number is correct`
    }
    else {
        return `Try agian`
    }
}
c = a(3)
c2 = a(2)
c3 = a(5)
console.log(c)
console.log(c2)
console.log(c3)

// Q # 3

// let number = 15;
let mean = (p, q, r, s, t) => {
    return p + q + r + s + t / 4
}
b = mean(3, 2, 5, 6, 7)
console.log(b)
