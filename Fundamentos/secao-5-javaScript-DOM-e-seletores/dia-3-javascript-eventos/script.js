//variáveis globais

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

//criação dias:

const decemberDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

function createDaysOfTheMonth() {
  let daysUl = document.getElementById('days'); // captura do elemento pai

  for (let index = 0; index < decemberDaysList.length; index += 1) {

    let monthDay = decemberDaysList[index]; //para cada volta, ele pega um dia;
    let dayItem = document.createElement('li'); // para cada volta, ele cria um li
    dayItem.innerHTML = monthDay//para cada volta ele acrescenta o dia na li
    daysUl.appendChild(dayItem); // pra cada volta, ele acrescenta a li com o dia dentro do pai

    if (monthDay === 24 || monthDay === 31) { //condição para os dias excessao e classes
      dayItem.className = 'holiday';
    } else if (monthDay === 4 || monthDay === 11 || monthDay === 18) {
      dayItem.className = 'friday';
    } else if (monthDay === 25) {
      dayItem.className = 'holiday' + ' ' + 'friday'; // adiciona duas classes no item.
    } else {
      dayItem.className = 'day';
    }
  }
}
createDaysOfTheMonth();


//botao feriados:

function createButton() {
  let buttonsConteiner = document.querySelector(".buttons-container"); //pega o pai
  let newButton = document.createElement('button'); // cria o botao com um nome
  newButton.id = "btn-holiday" // dá ID ao botao
  newButton.innerHTML = "Feriados";
  buttonsConteiner.appendChild(newButton); // adc o botao ao pai. 
}
createButton()

let buttonHoliday = document.getElementById("btn-holiday"); //armazona o de foco
let holidays = document.getElementsByClassName("holiday");


buttonHoliday.addEventListener("click", changeBackground);

let newColor = "rgb(229, 246, 186)";
let oldColor = "rgb(237, 237, 237)";

function changeBackground() {
  for (let index in holidays) {
    if (holidays[index].style.backgroundColor === oldColor) {
      holidays[index].style.backgroundColor = newColor;
    } else {
      holidays[index].style.backgroundColor = oldColor;
    }
  }
}

//botao friday:

function fridayButton() {
  let buttonsConteiner = document.querySelector(".buttons-container"); //pega o pai
  let fridayBtn = document.createElement('button'); // cria o botao com um nome
  fridayBtn.id = 'btn-friday';
  fridayBtn.innerHTML = 'Sexta-feira';
  buttonsConteiner.appendChild(fridayBtn);
}
fridayButton();

let fridayBtn = document.getElementById('btn-friday');
let friday = document.getElementsByClassName('friday');

fridayBtn.addEventListener("click", function () {

  let day = [4, 11, 18, 25];
  let change = "sextô";

  for (let index = 0; index < friday.length; index += 1) {
    if (friday[index].innerHTML !== change) {
      friday[index].innerHTML = change;
    } else {
      friday[index].innerHTML = day[index];
    }
  }
});

// Função zoom nos botoes

let ulDays = document.getElementById('days'); // captura do elemento pai
let pattern = '20px';

function zoomIn() {
  ulDays.addEventListener("mouseover", function (event) {
    event.target.style.fontSize = '30px';
    event.target.style.fontWeight = '200';
  });
}

function zoomOut() {
  ulDays.addEventListener("mouseout", function (event) {
    event.target.style.fontSize = pattern;
    event.target.style.fontWeight = 0;
  })
}

zoomIn()
zoomOut()

function createTasts(task) {
  getMyTasks = document.querySelector('.my-tasks'); //pai
  let tagSpan = document.createElement('span');
  tagSpan.innerHTML = task;
  getMyTasks.appendChild(tagSpan);
}
createTasts("Assistir a aula");

function colorTask(color) {
  getMyTasks = document.querySelector('.my-tasks'); //pai
  let colorMark = document.createElement('div');
  colorMark.className = 'task';
  colorMark.style.backgroundColor = color;
  getMyTasks.appendChild(colorMark)
}
colorTask('rgb(156, 245, 168)');


let getDiv = document.querySelector('.task');

getDiv.addEventListener("click", selectTask);

function selectTask() {
  if(getDiv.className === 'task'){
    getDiv.className = 'task selected';
  } else {
    getDiv.className = 'task'
  }
}
selectTask();

  ulDays = document.getElementById('days'); // captura do elemento pai

  function colorDayTask(){
    let changedColor = 'rgb(156, 245, 168)'; //verde
    let originalColor = 'rgb(237, 237, 237)'; //cinza

    ulDays.addEventListener('click', function(event){
      if(event.target.style.backgroundColor === changedColor){
        event.target.style.backgroundColor = originalColor;
      } else{
        event.target.style.backgroundColor = changedColor;
      }
    });
  }
  colorDayTask();
 









