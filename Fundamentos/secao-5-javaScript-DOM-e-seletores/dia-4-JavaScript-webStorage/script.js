//variáveis fixas
let getBody = document.getElementById('fullPage');
let getBanner = document.querySelector('.banner');
let text = document.querySelector('#Inner');

//Cor de fundo da tela

let ColorButton = document.createElement('button');
getBanner.appendChild(ColorButton);
ColorButton.innerHTML = "Trocar cor de fundo";

ColorButton.addEventListener("click", changeBackgroundColor);

function changeBackgroundColor() {

  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  let color = `rgb(${r},${g},${b})`;

  if (getBody.style.backgroundColor != color) {
    getBody.style.backgroundColor = color;
  } else {
    getBody.style.backgroundColor = color
  }
}

//Cor do texto;
let textColorButton = document.createElement('button');
getBanner.appendChild(textColorButton);
textColorButton.innerHTML = "Trocar cor do texto";

textColorButton.addEventListener("click", changeTextColor);

function changeTextColor() {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  let textColor = `rgb(${r},${g},${b})`;
  text.style.color = textColor;
}

//Tamanho da fonte;
let increaseFontSizeButton = document.createElement('button');
getBanner.appendChild(increaseFontSizeButton);
increaseFontSizeButton.innerHTML = "Aumentar texto +";

increaseFontSizeButton.addEventListener("click", increaseFontSize);

let size = 15;
let fullSize = '';
function increaseFontSize() {
  size = size + 1;
  fullSize = `${size}px`
  console.log(fullSize);
  text.style.fontSize = fullSize;
}


let decreaseFontSizeButton = document.createElement('button');
getBanner.appendChild(decreaseFontSizeButton);
decreaseFontSizeButton.innerHTML = "Diminuir texto -";

decreaseFontSizeButton.addEventListener("click", decreaseFontSize);

function decreaseFontSize() {
  size = size - 1;
  fullSize = `${size}px`
  console.log(fullSize);
  text.style.fontSize = fullSize;
}

/* Espaçamento entre as linhas do texto; */

let increaseSpaceBetweenLinesButton = document.createElement('button');
getBanner.appendChild(increaseSpaceBetweenLinesButton);
increaseSpaceBetweenLinesButton.innerHTML = "Espaço entre linhas +";

increaseSpaceBetweenLinesButton.addEventListener("click", increaseSpaceBetween);

let space = 15;

function increaseSpaceBetween() {
  space = space + 1;
  fullSize = `${space}px`
  console.log(fullSize);
  text.style.lineHeight = fullSize;
}

let decreaseSpaceBetweenLinesButton = document.createElement('button');
getBanner.appendChild(decreaseSpaceBetweenLinesButton);
decreaseSpaceBetweenLinesButton.innerHTML = "Espaço entre linhas -";

decreaseSpaceBetweenLinesButton.addEventListener("click", decreaseSpaceBetween);

function decreaseSpaceBetween() {
  space = space - 1;
  fullSize = `${space}px`
  console.log(fullSize);
  text.style.lineHeight = fullSize;
}


//Alterar tipo de Fonte

let fontFamilyButton = document.createElement('button');
getBanner.appendChild(fontFamilyButton);
fontFamilyButton.innerHTML = "Alterar Fonte";

fontFamilyButton.addEventListener("click",changeFontFamily);

function changeFontFamily(){
  let fontType = ["Arial", "Verdana", "Helvetica","Courier New", "Gill Sans", "Comfortaa"];
  let num;
  num = Math.floor(Math.random()*6);
  text.style.fontFamily = fontType[num];
}

//chamadas de funções

changeBackgroundColor();
changeTextColor();
changeFontSize();
increaseFontSize();
decreaseFontSize();
increaseSpaceBetween();
decreaseSpaceBetween();
changeFontFamily();
