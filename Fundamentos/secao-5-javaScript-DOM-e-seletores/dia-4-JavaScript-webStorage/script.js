//variáveis fixas
let getBody = document.getElementById('fullPage');
let getBanner = document.querySelector('.banner');


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



//chamadas de funções

changeBackgroundColor();