function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
}

createDaysOfTheWeek();

// Escreva seu código abaixo.
function createDaysOfTheMonth() {

  for (let index = 1; index <= 2; index += 1) {
    let monthDay = document.createElement('li');
    days.appendChild(monthDay);
    monthDay.innerHTML = index+28;
  }
  for (let index = 1; index <= 31; index += 1) {
    let monthDay = document.createElement('li');
    days.appendChild(monthDay);
    monthDay.innerHTML = index;
  }
}
createDaysOfTheMonth();
