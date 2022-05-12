const readLine = require('readline-sync');

const sorte = readLine.questionFloat('Entre 0 e 10 qual é seu número da sorte? ');

const sorteio = (numero)=> {
  const random = Math.round(Math.random() * 10);
  if (random === numero) {
    console.log(`Parabéns, você acertou o número aleatório ${random}`);
  } else {
    console.log(`${random} tente na próxima vez`);
  }
}

sorteio(sorte);
