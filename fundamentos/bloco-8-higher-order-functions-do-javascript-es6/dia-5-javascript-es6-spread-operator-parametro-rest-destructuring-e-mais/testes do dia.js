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

// 2 - Utilizando array destructuring, faça com que os valores apareçam nas variáveis correspondentes ao seu verdadeiro tipo

const arrayDasLets = [comida, animal, bebida];

const [animal1, bebida1, comida1] = arrayDasLets;

console.log(animal1);
//-----------------------------------------------------

let numerosPares = [1, 3, 5, 6, 8, 10, 12];

console.log(numerosPares); // [6, 8, 10, 12];

// Utilize array destructuring para produzir o resultado esperado pelo console.log abaixo


const [] = numerosPares;

console.log(numerosPares);
//-----------------------------------------------------

// DEFAULT DESTRUCTURING

const getNationality = ({ firstName, nationality }) => `${firstName} is ${nationality}`;

const person = {
  firstName: 'João',
  lastName: 'Jr II',
};
const { nationality = 'Brazilian' } = person;

const otherPerson = {
  firstName: 'Ivan',
  lastName: 'Ivanovich',
  nationality: 'Russian',
};

console.log(getNationality(otherPerson)); // Ivan is Russian
console.log(getNationality(person));
//-----------------------------------------------------

// Object Property Shorthand

const getPosition = (latitude, longitude) => ({
    latitude,
    longitude});
  
  console.log(getPosition(-19.8157, -43.9542));
