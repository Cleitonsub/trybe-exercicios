const readline = require('readline-sync');

const peso = readline.questionFloat('Qual seu peso em Kg? ');
const altura = readline.questionFloat('Qual sua altura em cm? ');

const imc = () => {
  const resultado =  peso / (altura * 2);
  return resultado * 100;
};

console.log(`Seu IMC é ${imc()}`);
