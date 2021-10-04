//----------------------------------------------------------------
// Parte 1 - Crie uma função que retorne um objeto no formato { nomeCompleto, email } representando uma nova pessoa contratada. Passe sua função como parâmetro da HOF newEmployees para criar cada pessoa contratada em seu respectivo id . A sua função deve receber como parâmetro o nome completo da pessoa funcionária e a partir dele gerar automaticamente um email no formato nome_da_pessoa@trybe.com .

const peopleID = (completeName, email) => {
    const obj = {
        nomeCompleto: completeName,
        email: email
    };
    return obj;
}

const newEmployees = (func1, name1, email1, name2, email2, name3, email3) => {
    const employees = {
      id1: func1(name1, email1), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
      id2: func1(name2, email2), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
      id3: func1(name3, email3) // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
    }
    return employees;
};

console.log(newEmployees(peopleID, 'Pedro Guerra', 'pedro_guerra@trybe.com', 'Luiza Drumond', 'luiza_drumond@trybe.com', 'Carla Paiva', 'carla_paiva@trybe.com'));

//----------------------------------------------------------------
// Parte 2 - Desenvolva uma HOF que retorna o resultado de um sorteio. Esta HOF irá gerar um número aleatório entre 1 e 5 recebendo como parâmetros o número apostado e uma função que checa se o número apostado é igual ao número sorteado. O retorno da sua HOF deve ser uma string (Ex: "Tente novamente" ou "Parabéns você ganhou").

const randomNumber = (min, max) => {
    const num = Math.random() * (max - min) + min
    return Math.round(num)
}

const prizaDraw = (func1, numMin, numMax) => {
    const sorteio = func1(numMin, numMax);
    const resultado = func1(numMin, numMax);

    if (sorteio === resultado) {
        console.log('Parabéns você ganhou');
    } else {
        console.log('Tente novamente');
    }
}

prizaDraw(randomNumber, 1, 3);

//----------------------------------------------------------------
// Parte 3 - Crie uma HOF que receberá três parâmetros. O primeiro será um array de respostas corretas (Gabarito), o segundo será um array de respostas a serem verificadas (respostas da pessoa estudante) e o terceiro é uma função que checa se as respostas estão corretas e faz a contagem da pontuação final recebida pela pessoa estudante. Ao final a HOF deve retornar o total da contagem de respostas certas.

    // Quando a resposta for correta a contagem sobe 1 ponto, quando for incorreta desce 0.5 pontos, e quando não houver resposta ("N.A") não altera-se a contagem.

    