console.log("---exercicio 1---")

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

console.log(numbers[0])
console.log(numbers[1])
console.log(numbers[2])
console.log(numbers[3])
console.log(numbers[4])
console.log(numbers[5])
console.log(numbers[6])
console.log(numbers[7])
console.log(numbers[8])
console.log(numbers[9])


console.log("---exercicio 2---")

let soma = 0;
for (let index = 0; index < numbers.length; index += 1) {
   soma += numbers[index]
}
console.log(soma)


console.log("---exercicio 3---")

let mediaAritmetica = 0;
for (let index = 0; index < numbers.length; index += 1) {
    mediaAritmetica += numbers[index];
}
console.log(mediaAritmetica / numbers.length)


console.log("---exercicio 4---")


