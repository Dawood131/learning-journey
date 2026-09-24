// 🔹 Beginner (1–10)

// Reverse a string.
let str = "hello"
console.log(str.split("").reverse().join(""))

// Check if a string is a palindrome.

function palindrome(str2) {
    return str2 == str2.split("").reverse().join("")
}
console.log(palindrome("madam"))
console.log(palindrome("hello"))
// Find factorial of a number.
function factorial(n) {
    return n == 0 ? 1 : n * factorial(n - 1)
}
console.log(factorial(5))
// or
function factorial2(n2) {
    let a = 1;
    for (let i = 1; i <= n2; i++) {
        a *= i
    }
    return a
}
console.log(factorial2(5))
// Find the largest number in an array.
let arr = [1, 2, 3, 4, 5]
console.log(Math.max(...arr))
// Find the smallest number in an array.
console.log(Math.min(...arr))

// Count vowels in a string.
let countvowels = (str3) => {
    return str3.match(/[aeiou]/gi).length
}
console.log(countvowels("my name is dawood"))

// Find the sum of array elements.
let sum = (arr2) => {
    return arr2.reduce((a, b) => a + b)
}
console.log(sum([1, 2, 3, 4, 5]))
// Find the average of array elements.
let average = (arr3) => {
    return arr3.reduce((a, b) => (a + b) / arr3.length || 0)
}
console.log(average([2, 3]))

// Print Fibonacci series up to n.
let fabonacci = (arr4) => {
    let fab = [0, 1]
    for (let i = 2; i <= arr4; i++) {
        fab.push(fab[i - 1] + fab[i - 2])
    }
    return fab
}
console.log(fabonacci([8]))

// Find the length of the longest word in a string.

function length(str5) {
    return Math.max(...str5.split(" ").map(word => word.length)
    )
}
console.log(length("i love javascript"))

// find a longest word 

function lonword(str6) {
    return str6.split(" ").reduce((curr, long) => curr.length > long.length ? curr : long)
}
console.log(lonword("i love javascript"))
// 🔹 Intermediate (11–20)

// Remove duplicates from an array.
function remove(arr6) {
    return [...new Set(arr6)]
}
console.log(remove([1, 3, 4, 3, 5, 6, 4]))

// Find the second largest number in an array.

let second = (arr7) => {
    let lar = [...new Set(arr7)].sort((a, b) => b - a)
    return lar[1]
}
console.log(second([1, 2, 3, 4, 5, 5, 4, 3]))

// Find the missing number in a sequence [1…n].

function missing(arr, n) {
    let total = (n * (n + 1)) / 2
    let sum = arr.reduce((a, b) => a + b)
    return total - sum
}
console.log(missing([1, 2, 3, 5, 6],6))



// Check if two strings are anagrams.
function anagrams(str1, str2) {
    return str1.split("").sort().join("") === str2.split("").sort().join("")
}
console.log(anagrams("con", "noc"))

// Count occurrence of each character in a string.

// Find the intersection of two arrays.

// Reverse words in a sentence.

// Find the first non-repeated character in a string.