// // Q # 1
// // strings
// let real_name = "Dawood"
// let age = 18
// console.log(`My name is ${real_name} and I'm ${age} old`)
// console.log(real_name.length)
// console.log(real_name.replace("Da", "Fa"))
// console.log(real_name.slice(2, 5))
// console.log(real_name.toLocaleLowerCase())
// console.log(real_name.toLocaleUpperCase())

// Problem # 1

let str = "Dawood"
console.log(str[0])
console.log(str[5])

// Problem # 2

let con = "Hello"
let con2 = " World"
console.log(con.concat(con2))

// Problem # 3

const rev = "Hello! My name is Dawood"
let reverse = rev.split("").reverse().join("")
console.log(reverse)

// Problem # 4

let re = "I Love Coding"
let res = re.replace(/\s/g, "")
console.log(res)

// " JavaScript " ko spaces remove karke uppercase me convert karo.

let java = " JavaScript ";
console.log(java.trim().toUpperCase())

// "I love coding" me "coding" ko "JavaScript" se replace karo.

let coding = "I love coding";
console.log(coding.replace("coding", "JavaScript"))

// "Frontend Developer" me se "Developer" nikalne ka method likho.

let front = "Frontend Developer";
console.log(front.slice(9))

// "apple,banana,mango" ko array me convert karo.

let fruit = "apple,banana,mango"
console.log(fruit.split().reverse())

// "Hello World" ka length nikal kar batao.

console.log(front.length)

// "hello world" ka pehla letter capital karo (baaki same rehna chahiye).
// 👉 Output: "Hello world"

let cap = "hello world";
let result = cap.charAt(0).toUpperCase() + cap.slice(1);
console.log(result)

// "Learning JavaScript is fun" me check karo ke "JavaScript" exist karta h ya nahi

const lea = "Learning JavaScript is fun";
console.log(lea.includes("JavaScript"))

// "Backend" me se sirf "end" nikal kar dikhayo.

let bac = "Backend"
console.log(bac.slice(4))

// "OpenAI" string ko reverse karke likho.
let op = "Open AI"
console.log(op.split("").reverse().join(""))


// "CSS,HTML,JS" ko ek array me convert karo aur uska 2nd element print karo.

let make = "CSS, HTML, JS"
let ma = (make.split(","))
console.log(ma[1])


