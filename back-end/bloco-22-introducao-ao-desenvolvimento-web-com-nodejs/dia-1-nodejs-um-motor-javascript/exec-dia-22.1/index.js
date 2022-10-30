const readLine = require('readline-sync');

const npm = readLine.question('Qual script deve ser executado? imc, sorteio ou velocidade? ');

switch (npm) {
  case 'imc':
    const imc = require('./imc')
  break
  case 'sorteio':
    const sorteio = require('./sorteio')
  break
  case 'velocidade':
    const velocidade = require('./velocidade')
  break
  default:
    console.log(`Escolha uma opção válida.`)
}
