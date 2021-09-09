function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
};
  
createDaysOfTheWeek();

// Escreva seu código abaixo.


//Exercicio 1.

function createDaysOfCalendar() {
  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
  const ulDayList = document.querySelector('#days');

  for (let index = 0; index < dezDaysList.length; index += 1) {
    let days = dezDaysList[index];
    let daysListItem = document.createElement('li');
    daysListItem.classList.add("day");
    daysListItem.innerHTML = days;
    ulDayList.appendChild(daysListItem);
    if (days === 24) {
      daysListItem.classList.add("holiday");
    }
    if (days === 25) {
      daysListItem.classList.add("holiday");
    }
    if (days === 31) {
      daysListItem.classList.add("holiday");
    }
    if (days === 4) {
      daysListItem.classList.add("friday");
    }
    if (days === 11) {
      daysListItem.classList.add("friday");
    }
    if (days === 18) {
      daysListItem.classList.add("friday");
    }
    if (days === 25) {
      daysListItem.classList.add("friday");
    }
  };
};

createDaysOfCalendar();

