const a = 10;
const b = 15;
const c = 20;
const d = "bishop"
let e = "BiShOp"


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


if (a + b + c == 180) {
    console.log("true")
} else if (a + b + c > 0) {
    console.log("false")
} else {
    console.log("Números inválidos")
}


if (d === e.toLowerCase()) {
    console.log("diagonals")
} else {
    console.log("Peça inválida")
}


