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

const decemberDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

function createDaysOfTheMonth() {
  let daysUl = document.getElementById('days');

  for (let index = 0; index < decemberDaysList.length; index += 1) {
    
    let monthDay = decemberDaysList[index];
    let dayItem = document.createElement('li');
    dayItem.innerHTML = monthDay;
    daysUl.appendChild(dayItem);

    if(monthDay === 24 || monthDay === 25 || monthDay === 31){
      dayItem.className = 'day holiday';
    } else if (monthDay === 4 || monthDay === 11 || monthDay === 18 || monthDay === 25){
      dayItem.className = 'day friday';
    } else {
      dayItem.className = 'day';
    }
  }
}
createDaysOfTheMonth();
