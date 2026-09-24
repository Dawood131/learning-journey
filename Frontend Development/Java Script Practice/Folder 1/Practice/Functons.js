// Problem # 1

let n = 5;
if (n % 2 === 0) {
    console.log("The number is even")
}
else {
    console.log("The number is odd")
}

// Problem # 2

let age = 18;
if (age >= 18) {
    console.log("Your are eligible to vote")
}
else {
    console.log("Your are not eligible to vote")
}

// Problem # 3

let a = 53;
let b = 434;
if (a > b) {
    console.log(a + " a is larger")
}
else {
    console.log(b + " b is larger")
}

// Problem # 4 

for (let i = 1; i <= 10; i++) {
    console.log(i)
}

// Problem # 5
let j = 10
while (j >= 1) {
    console.log(j)
    j--;
}

// Problem # 6

const nn = (name) => {
    console.log("Hello " + name)
}
nn("Dawood")

// and
let number = (x, y) => {
    return (x + y) * 5
}
nm1 = number(2, 3)
nm2 = number(9, 5)
nm3 = number(6, 2)
console.log(nm1)
console.log(nm2)
console.log(nm3)

// Problem # 7

let ab = 0;
if (ab > 0) {
    console.log(ab + " Positive")
}
else if (ab < 0) {
    console.log(ab + " Negative")
}
else {
    console.log(ab + " = Zero")
}

// Problem # 8
let natural = 10;
let sum = 0;
for (let ii = 1; ii <= natural; ii++) {
    sum += ii;
}
console.log("The sum of first " + natural + " natural number is = " + sum)

// Problem # 9

let lar = 5;
let lar2 = 555;
let lar3 = 444;
if (lar > lar2 && lar > lar3) {
    console.log(lar + "  is larger")
}
else if (lar2 > lar3) {
    console.log(lar2 + " is larger")
}
else {
    console.log(lar3 + " is larger")
}

// Problem # 10

const fac = (n) => {
    let fic = 1;
    for (let fact = 1; fact <= n; fact++) {
        fic *= fact
    }
    return fic
}
factorial = fac(5);
console.log(factorial)

// Probem # 11

for (let r = 1; r <= 5; r++) {
    console.log("*".repeat(r))
}

// Problem # 12

let t = 5;
for (let ta = 1; ta <= t; ta++) {
    ta *= t
    console.log(ta)
}

// Q # 13

let le = "Hey! My name is Dawood"
console.log(le.length)

let up = "hello world";
console.log(up.toLocaleUpperCase())

let lo = "HELLO WORLD";
console.log(lo.toLowerCase())

// Q # 14

const data = {
    name: "Dawood",
    marks: 1055,
    city: "Lahore"
}
console.log(data)
console.log(data.marks)
data.Gender = "Male"
console.log(data)

// Q # 15

let func1 = (_sayhello) => {
    return "Hello World"
}
a = func1()
console.log(a)


// Q # 16

let func2 = (n) => {
    return n * n
}
b = func2(2)
b2 = func2(3)
b3 = func2(4)
console.log(b)
console.log(b2)
console.log(b3)

// Q # 17

let func3 = (x, y) => {
    return x + y;
}
sum = func3(10, 5)
console.log(sum)

// Q # 18

let func4 = (e) => {

    if (e % 2 === 0) {
        return e + " is even"
    }

    else {
        return e + " is odd"
    }
}
even = func4(9)
even = func4(10)
console.log(even)

// Q # 19

let ao = (d) => {
    let dd = 1;
    for (let ad = 1; ad <= d; ad++) {
        dd *= ad
    }
    return dd
}
ae = ao(3);
console.log(ae)