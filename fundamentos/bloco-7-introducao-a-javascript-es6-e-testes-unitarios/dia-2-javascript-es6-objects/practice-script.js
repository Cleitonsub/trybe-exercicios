// const customer = {
//     firstName: 'Roberto',
//     age: 22,
//     job: 'Teacher',
// };

// function testeObject(objeto, chave, valor) {
//     objeto[chave] = valor;
// }


// testeObject(customer, 'lastName', 'Ribeiro');
// testeObject(customer, 'Nacionalidade', 'Brasileiro');
// console.log(customer);

//--------------------------------------------------------------

// const student1 = {
//     Html: 'Muito Bom',
//     Css: 'Bom',
//     JavaScript: 'Ótimo',
//     SoftSkills: 'Ótimo',
// };

// function listSkills(student) {
//     const arrayOfSkills = Object.keys(student);
//     for (const index in arrayOfSkills) {
//         console.log(`${arrayOfSkills[index]}, Nível: ${student[arrayOfSkills[index]]}`);
//     }
// }
// listSkills(student1);

//--------------------------------------------------------------

// const student = {
//     Html: 'Muito Bom',
//     Css: 'Bom',
//     JavaScript: 'Ótimo',
//     SoftSkill: 'Ótimo',
// };

// const listSkillsValuesWithFor = (student) => {
//     const skills = [];
//     for(skill in student) {
//         skills.push(student[skill]);
//     }
  
//     return skills;
// };
  
//   const listSkillsValuesWithValues = (student) => Object.values(student);
  
// //   Sem Object.values
//   console.log(listSkillsValuesWithFor(student));
  
// //   // Com Object.values
//   console.log(listSkillsValuesWithValues(student));

//--------------------------------------------------------------

// const países = {
//     França: 'Paris',
//     Brasil: 'Brasília',
//     Espanha: 'Madrid',
//     Portugal: 'Lisboa',
//   };
//   const pairKeyValue = Object.entries(países);
//   console.log(pairKeyValue);

//   for(index in pairKeyValue) {
//     console.log('--------');
//     console.log('País:', pairKeyValue[index][0]);
//     console.log('Capital:', pairKeyValue[index][1]);
//   };

//--------------------------------------------------------------


const person = {
    name:'Roberto',
};
  
const lastName = {
    lastName: 'Silva',
};
  
const newPerson = Object.assign({},person,lastName);
newPerson.name = 'Gilberto';
console.log(newPerson);
console.log(person);
