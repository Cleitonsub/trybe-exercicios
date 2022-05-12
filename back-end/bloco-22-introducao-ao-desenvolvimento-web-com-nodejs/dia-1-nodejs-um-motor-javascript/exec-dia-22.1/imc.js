const readLine = require('readline-sync');

const name = readLine.question('Qual é o seu nome? ');
const peso = readLine.questionFloat('Quanto você pesa em Kg? (ex: 75) ');
const altura = readLine.questionFloat('Qual é a sua altura? (ex: 1.85) ');

const imc = (name, peso, altura) => {
  const magreza = 18.5;
  const normal = 24.9;
  const sobrepeso = 29.9;
  const obesidade1 = 34.9;
  const obesidade2 = 39.9;
  const obesidade3 = 40;

  const result = peso / altura / altura;

  if (result < magreza) {
    console.log(`${name}, seu IMC é de ${result.toFixed(2)}, você está abaixo do peso ideal (magreza)`);
  } else if (result > magreza && result < normal) {
    console.log(`${name}, seu IMC é de ${result.toFixed(2)}, você está com um peso normal`);
  } else if (result > normal && result < sobrepeso) {
    console.log(`${name}, seu IMC é de ${result.toFixed(2)}, você está acima do peso (sobrepeso)`);
  } else if (result > sobrepeso && result < obesidade1) {
    console.log(`${name}, seu IMC é de ${result.toFixed(2)}, você está com obesidade grau 1`);
  } else if (result > obesidade1 && result < obesidade2) {
    console.log(`${name}, seu IMC é de ${result.toFixed(2)}, você está com obesidade grau 2`);
  } else if (result > obesidade3) {
    console.log(`${name}, seu IMC é de ${result.toFixed(2)}, você está com obesidade grau 3 ou 4`);
  }
};

imc(name, peso, altura);
