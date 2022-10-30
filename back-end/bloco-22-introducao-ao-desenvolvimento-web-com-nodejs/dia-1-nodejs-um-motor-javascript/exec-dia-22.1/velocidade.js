const readLine = require('readline-sync');

const distancia = readLine.question('Qual é a distância em metros? ');
const tempo = readLine.question('Quanto tempo levou em segundos? ');

const velocidade = (distancia, tempo) => {
  const result = distancia / tempo;
  console.log(`A velocidade é de ${result.toFixed(2)} km/h`);
};

velocidade(distancia, tempo);
