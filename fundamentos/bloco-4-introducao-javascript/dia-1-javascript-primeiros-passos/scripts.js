const a = 10;
const b = 15;
const c = 20;


console.log(a + b)
console.log(a - b)
console.log(a * b)
console.log(a / b)
console.log(a % b)


if (a > b) {
    console.log("A constante a é maior que b")
} else {
    console.log("A constante b é maior que a")
}


if (a > b) {
    console.log("a é a maior constante")
} else if (b > c) {
    console.log("b é a maior constante")
} else {
    console.log("c é a maior constante")
}


if (a > 0) {
    console.log("positive")
} else if (a < 0) {
    console.log("negative")
} else {
    console.log("zero")
}
