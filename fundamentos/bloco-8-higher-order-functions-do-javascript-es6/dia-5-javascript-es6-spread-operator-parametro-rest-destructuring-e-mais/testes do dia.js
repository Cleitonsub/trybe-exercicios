// SPREAD OPERATOR

// Faça uma lista com as suas frutas favoritas
const specialFruit = ['banana', 'pera', 'manga'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['melão', 'morango', 'kiwi'];

const fruitSalad = (fruit, additional) => [...fruit, ...additional];

console.log(fruitSalad(specialFruit, additionalItens));


// ARRAY DESTRUCTURING

const saudacoes = ['Olá', (saudacao) => console.log(saudacao)];

saudacoes[1](saudacoes[0]); // Olá

// 1 - Produza o mesmo resultado acima, porém utilizando array destructuring

const [saudacao] = saudacoes;

console.log(saudacao);
 //-----------------------------------------------------
let comida = 'gato';
let animal = 'água';
let bebida = 'arroz';

console.log(comida, animal, bebida); // arroz gato água

// Utilizando array destructuring, faça com que os valores apareçam nas variáveis correspondentes ao seu verdadeiro tipo

const arrayDasLets = [comida, animal, bebida];

const [animal1, bebida1, comida1] = arrayDasLets;

console.log(animal1);
