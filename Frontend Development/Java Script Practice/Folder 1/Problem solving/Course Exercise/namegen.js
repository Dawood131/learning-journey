random = Math.floor(1 + Math.random() * 50)
let first, second, third;

// first Word

if (random < 10) {
    first = "Crazy"
}
else if (random < 10 || random > 20) {
    first = "Amazing"
}
else {
    first = "Fire"
}

// Second Word
random = Math.floor(1 + Math.random() * 50)
if (random < 10) {
    second = "Engine"
}
else if (random < 10 || random > 20) {
    second = "Foods"
}
else {
    second = "Garments"
}

// Third Word
random = Math.floor(1 + Math.random() * 50)
if (random < 10) {
    third = "Bros"
}
else if (random < 10 || random > 20) {
    third = "Limited"
}
else {
    third = "Hub"
}
console.log(first, second, third)