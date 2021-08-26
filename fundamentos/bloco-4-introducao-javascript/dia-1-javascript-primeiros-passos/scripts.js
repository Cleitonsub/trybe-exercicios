const a = 10;
const b = 15;
const c = 20;
const d = "bishop";
let e = "BiShOp";
let nota = 86;

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


if (nota >= 90) {
    console.log("A")
} else if (nota >= 80) {
    console.log("B")
} else if (nota >= 70) {
    console.log("C")
} else if (nota >= 60) {
    console.log("D")
} else if (nota >= 50) {
    console.log("E")
} else if (nota < 50) {
    console.log("F")
} else if (nota < 0) {
    console.log("Erro: nota menor que 0%")
} else if (nota > 100) {
    console.log("Erro: nota menor que 100%")
} else {
    console.log("Erro")
}