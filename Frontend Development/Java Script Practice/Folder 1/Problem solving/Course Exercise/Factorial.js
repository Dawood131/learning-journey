let factorial = (n) => {
    return n == 0 ? 1 : n * factorial(n - 1)
}
console.log(factorial(5))

function factorial2(a) {
    let b = 1;
    for (i = 1; i <= a; i++) {
        b *= i
    }
    return b
}
console.log(factorial2(5))