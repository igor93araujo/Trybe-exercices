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
  let daysUl = document.getElementById('days'); // captura do elemento pai

  for (let index = 0; index < decemberDaysList.length; index += 1) {
    
    let monthDay = decemberDaysList[index]; //para cada volta, ele pega um dia;
    let dayItem = document.createElement('li'); // para cada volta, ele cria um li
    dayItem.innerHTML = monthDay//para cada volta ele acrescenta o dia na li
    daysUl.appendChild(dayItem); // pra cada volta, ele acrescenta a li com o dia dentro do pai

    if(monthDay === 24 || monthDay === 25 || monthDay === 31){ //condição para os dias excessao e classes
      dayItem.className = 'day holiday';
    } else if (monthDay === 4 || monthDay === 11 || monthDay === 18 || monthDay === 25){
      dayItem.className = 'day friday';
    } else {
      dayItem.className = 'day';
    }
  }
}
createDaysOfTheMonth();

function createButton(){
  let buttonsConteiner = document.querySelector(".buttons-container"); //pega o pai
  let newButton = document.createElement('button'); // cria o botao com um nome
  newButton.id = "btn-holiday" // dá ID ao botao
  newButton.innerHTML = "Feriados";
  buttonsConteiner.appendChild(newButton); // adc o botao ao pai. 
}
createButton()