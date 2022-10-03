//variáveis fixas
let getBody = document.getElementById('fullPage');
let getBanner = document.querySelector('.banner');
let text = document.querySelector('#Inner');

//Código

let ColorButton = document.createElement('button');
getBanner.appendChild(ColorButton);
ColorButton.innerHTML = "Trocar cor de fundo";

ColorButton.addEventListener("click",changeBackgroundColor);

function changeBackgroundColor(){

  let r = Math.floor(Math.random()*256);
  let g = Math.floor(Math.random()*256);
  let b = Math.floor(Math.random()*256);
  let color =`rgb(${r},${g},${b})`;

  if(getBody.style.backgroundColor != color){
    getBody.style.backgroundColor = color;
  } else {
    getBody.style.backgroundColor = color
  }
}

let textColorButton = document.createElement('button');
getBanner.appendChild(textColorButton);
textColorButton.innerHTML = "Trocar cor do texto";

textColorButton.addEventListener("click",changeTextColor);

function changeTextColor(){
  let r = Math.floor(Math.random()*256);
  let g = Math.floor(Math.random()*256);
  let b = Math.floor(Math.random()*256);
  let textColor =`rgb(${r},${g},${b})`;
  text.style.color = textColor;
}


let increaseFontSizeButton = document.createElement('button');
getBanner.appendChild(increaseFontSizeButton);
increaseFontSizeButton.innerHTML = "Aumentar texto +";

increaseFontSizeButton.addEventListener("click", increaseFontSize);

let size = 15;
let fullSize = '';
function increaseFontSize(){
size = size + 1;
fullSize = `${size}px`
console.log(fullSize);
 text.style.fontSize = fullSize;
}


let decreaseFontSizeButton = document.createElement('button');
getBanner.appendChild(decreaseFontSizeButton);
decreaseFontSizeButton.innerHTML = "Diminuir texto -";

decreaseFontSizeButton.addEventListener("click", decreaseFontSize);

function decreaseFontSize(){
size = size - 1;
fullSize = `${size}px`
console.log(fullSize);
 text.style.fontSize = fullSize;
}





//chamadas de funções

changeBackgroundColor();
changeTextColor();
changeFontSize();
