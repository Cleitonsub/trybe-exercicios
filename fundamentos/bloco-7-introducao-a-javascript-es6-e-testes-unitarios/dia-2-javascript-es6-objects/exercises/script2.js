const lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
};
  
const lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
};
  
const lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
};

//1------------------------------------------------------

function addProprieties(object, key, value) {
    object[key] = value;
}

addProprieties(lesson2, 'turno', 'noite');

//2------------------------------------------------------

function keysList(object) {
    console.log(Object.keys(object));
}

keysList(lesson3);

//3------------------------------------------------------

function objectSize(object) {
    const size = Object.entries(object).length;
    console.log(size);
}

objectSize(lesson1);

//4------------------------------------------------------

function valueList(object) {
    console.log(Object.values(object));
}

valueList(lesson2);

//5------------------------------------------------------

const allLessons = {
    lesson1: {
        materia: 'Matemática',
        numeroEstudantes: 20,
        professor: 'Maria Clara',
        turno: 'manhã'
    },
    lesson2: {
        materia: 'História',
        numeroEstudantes: 20,
        professor: 'Carlos',
        turno: 'noite'
    },
    lesson3: {
        materia: 'Matemática',
        numeroEstudantes: 10,
        professor: 'Maria Clara',
        turno: 'noite'
    }
};

// console.log(allLessons);

//6------------------------------------------------------

function allStudents () {
    const lessons1 = allLessons.lesson1.numeroEstudantes;
    const lessons2 = allLessons.lesson2.numeroEstudantes;
    const lessons3 = allLessons.lesson3.numeroEstudantes;
    console.log(lessons1 + lessons2 + lessons3);
}

allStudents();

//7------------------------------------------------------

