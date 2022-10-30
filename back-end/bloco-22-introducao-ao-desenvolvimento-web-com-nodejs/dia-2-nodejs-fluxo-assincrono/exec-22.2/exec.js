const randomNum1 = Math.floor(Math.random() * 100 + 1);
const randomNum2 = Math.floor(Math.random() * 100 + 1);
const randomNum3 = Math.floor(Math.random() * 100 + 1);

// -----------------------------------------------------------------

// const funcProm = (a, b, c) => {
//   const promise = new Promise((resolve, reject) => {
//     if (typeof a != 'number' || typeof b != 'number' || typeof c != 'number') {
//       reject(new Error("Não é um número"));
//     };
//     const result = (a + b) * c;
//     if (result < 50) reject(new Error("Valor muito baixo"));
//     resolve(result);
//   });
//   return promise;
// };

// funcProm(randomNum1, randomNum2, randomNum3)
//   .then((result) => { console.log(`Resultado do cálculo: ${result}`)})
//   .catch((err) => {console.log(`Rejeitado: ${err.message}`)});

// -----------------------------------------------------------------

const funcProm = (a, b, c) => {
  try {
    if (typeof a != 'number' || typeof b != 'number' || typeof c != 'number') {
      throw new Error("Não é um número");
    }
    const result = (a + b) * c;
    if (result < 50) throw new Error("Valor muito baixo");
    console.log(`Resultado do cálculo: ${result}`);
  } catch (err) {
    console.log(`Rejeitado: ${err.message}`)
  }
};

funcProm(randomNum1, randomNum2, randomNum3);

// -----------------------------------------------------------------

