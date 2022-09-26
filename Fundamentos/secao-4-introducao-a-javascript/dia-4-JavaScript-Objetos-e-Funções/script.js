/* // Usando o objeto abaixo, utilize for/in e imprima no console a mensagem 'Olá xxxxx' para cada nome, substituindo o xxxxx pelo nome em questão.

let names = {
  person1: 'João',
  person2: 'Maria',
  person3: 'Jorge',
};

for (let key in names) {
   console.log('Olá' + ' ' + names[key])
}

// Usando o objeto abaixo, utilize for/in e imprima um console.log com as chaves e valores desse objeto.

let car = {
  model: 'A3 Sedan',
  manufacturer: 'Audi',
  year: 2020
};

for (let key in car) {
  console.log(key + ': ' + car[key])
} */

//

let statusDoCarro = 'desligado';
let aceleracao = 0;
let rotacaoVolante = 0;
let setaDoCarro = 'desligada';

function alterarStatus (){
  if(statusDoCarro === 'desligado'){
    statusDoCarro = 'ligado'
  } else{
    statusDoCarro = 'desligado';
  }
  return statusDoCarro;
}

function aceleracao(incremento){
  aceleracao = aceleracao + incremento;
  return 'Acelerando a ' + aceleracao + 'm/s²';
}


function frear(decremento){
  aceleracao = aceleracao - decremento;
  return 'Desacelerando a ' + aceleracao + 'm/s²';
}


function girarVolante(anguloRotacao){
  if (anguloRotacao<0){
    rotacaoVolante = 'esquerda';
  } else if (anguloRotacao>0){
    rotacaoVolante = 'direita';
  } else {
    rotação = 'nenhum lado';
  }
  return 'O volante virou para' + rotacaoVolante+ ' .';
}

function ligarSeta(sentido){
  if(sentido === 'esquerda'){
    return 'seta ligada para '+ sentido;
  } else if (sentido === 'direita'){
    return 'seta ligada para ' + sentido;
  } else if (sentido === 'reto'){
    return  'seta desligada.'
  }
}

const a = 5;
const b = 20;

function soma(a,b){
  return a+b;
}
console.log(soma(a,b))