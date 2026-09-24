let random = Math.floor(1 + Math.random() * 100)

function FaultyCalculator(a, c, b) {
    if (random <= 20) {
        if (c == "+") {
            return a - b
        }
        else if (c == "*") {
            return a + b
        }
        else if (c == "-") {
            return a / b
        }
        else if (c == "/") {
            return a ** b
        }
        else {
            return "Enter the Correct Number"
        }
    }
    else {
        if (c == "+") {
            return a + b
        }
        else if (c == "-") {
            return a - b
        }
        else if (c == "*") {
            return a * b
        }
        else if (c == "/") {
            return a / b
        }
        else {
            return "Enter the Correct Number"
        }
    }
}
console.log(random)
console.log(FaultyCalculator(4, "+", 5))
// console.log(FaultyCalculator(2, "-", 2))
// console.log(FaultyCalculator(1, "*", 2))
// console.log(FaultyCalculator(1, "/", 2))