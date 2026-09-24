// 🔹 Beginner (1–10)

// Reverse a string.
let reverse = "how are you "
console.log(reverse.split("").reverse().join(""))

// // Check if a string is a palindrome.

let str = (n) => {
    return n == n.split("").reverse().join("")
}
console.log(str("madam"))
console.log(str("hello"))

// // Find factorial of a number.
// // Tenery Operater 
let factorial =(n)=>{
    return n==0 ? 1 : n * factorial(n-1)
}
console.log(factorial(5))
// // or 
function factorial2 (a) {
    if(a==0) {
        return 1;
    }
    else {
        return a * factorial2(a-1)
    }
}
console.log(factorial2(5))
// // or 
// // for loop

function factorial3 (b){
    a = 1;
    for (let i = 1; i <= b; i++) {
        a*=i
    }
    return a
}
console.log(factorial3(5))

// // Find the largest number in an array.
let largest = [1,2,3,4,5]
console.log(Math.max(...largest))

// // Find the smallest number in an array.

// console.log(Math.min(...arr))

// // Count vowels in a string.

let vowels = (para) => {
    return para.match(/[aeiou]/gi).length
}
console.log(vowels("hello"))
// // Find the sum of array elements.

let add = (sum) => {
    return sum.reduce((a,b)=> a+b)
}
console.log(add([1,4]))

// // Find the average of array elements.
function average (av) {
    return av.reduce((a,b) => a+b/av.length)
}
console.log(average([5,5]))
// // Print Fibonacci series up to n.
// function fi(l) {
//     let nx = [0, 1]
//     for (let i = 2; i <= l; i++) {
//         nx.push(nx[i - 1] + nx[i - 2])
//     }
//     return nx
// }
// console.log(fi(9))
// // // Find the length of the longest word in a string

let length = (n) => {
    return Math.max(...n.split(" ").map(word => word.length))
}
console.log(length("hello how are you"))

// // Find the longest word in string 
let word = (str) => {
    return Math.max(...str.split(" ").reduce((current, longest)=> str.current>str.longest?current:longest))
}
console.log(length("Hello my name is Dawood and I am learining Javascript"))


// // 🔹 Intermediate (11–20)

// // Remove duplicates from an array.

let arr = [1 , 3 ,4,5,4,3,2,]
console.log([...new Set(arr)])
function dub (arr) {
    return [...new Set(arr)]
}
console.log(dub([5,5,3,2,3,5]))
// // Find the second largest number in an array.
let second = (n)=>{
    let lar = [...new Set(n)].sort((a,b)=> b-a)
    return lar[1]
}
 console.log(second([3, 4, 5, 53, 223, 2]))
// // Find the missing number in a sequence [1…n].

function missingnum(arsf, lax) {
    let total = lax * (lax + 1) / 2;
    let sum = arsf.reduce((vb, bv) => vb + bv)
    return total - sum
}
console.log(missingnum([1, 2, 3, 4, 5, 6, 8, 9], 9))

// // Check if two strings are anagrams.

function anagrams (jk, kj) {
    return jk.split("").sort().join("") === kj.split("").sort().join("")
}
console.log(anagrams("hello", "lohle"))
console.log(anagrams("jfjj" , "hehu"))

// // Count occurrence of each character in a string.
// function occ (ds) {
//     let count = {}
//     for (const ch of ds) {
//         count[ch] = (count[ch] || 0) + 1
//     }
//     return count
// }
// console.log(occ("Dawood"))

// // Find the intersection of two arrays.

// function int (ty, uy){
//     return ty.filter(ch => uy.includes(ch))
// }
// console.log(int([1,2,3,4,],[2,3,5,3,4,6,5,]))

// // Reverse words in a sentence.
// function wor (io, oi) {
//     return io.split(" ").reverse().join(" ")
// }
// console.log(wor("i am fine ! how about you?"))
// // Find the first non-repeated character in a string.
    
// let rep = (nod) =>{
//    for (const ch of nod){
//     if(nod.indexOf(ch) === nod.lastIndexOf(ch)){
//         return ch
//     }
//    }
//    return null
// }
// console.log(rep("dawood"))
