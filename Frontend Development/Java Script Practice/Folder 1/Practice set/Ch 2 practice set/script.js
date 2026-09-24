//  Q # 1

let age = 13;
if (age > 10 && age < 20) {
  console.log(`Your age is lies between 10 and 20`);
} else {
  console.log(`Your age does not lies between 10 and 20`);
}

// Q # 2

let a = "apple";
switch (a) {
  case "apple":
    console.log("The price of apple is 1$");
    break;
  case "mango":
    console.log("The price of mango is 2$");
    break;
  case "banana":
    console.log("The price of banana is 0.5$");
  default:
    console.log("I dont have this fruit");
}

// Q # 3

let num = 8;
if (num%2===0 && num%3===0)
  console.log(`The given number is divible by 2 and 3`)
else{
  console.log(`The given number does not divible by 2 and 3`)
}

// Q # 4

let numb = 10;
if (numb%2===0 || numb%3===0)
  console.log(`The given number is divible by 2 and 3`)
else{
  console.log(`The given number does not divible by 2 and 3`)
}

// Q # 5

let marks = 10;
let m = (marks>=40) ? "Pass" : "Fail";
console.log(m)