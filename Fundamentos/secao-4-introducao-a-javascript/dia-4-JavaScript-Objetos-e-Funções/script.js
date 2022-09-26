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
}

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

//Faça cinco programas, um para cada operação aritmética básica. Seu programa deve ter duas constantes, a e b, definidas no começo com os valores que serão operados.
const a = 5;
const b = 20;

function soma(a,b){
  return a+b;
}
console.log('Adição = ' + soma(a,b))

function subtracao(a,b){
  return a-b;
}
console.log('Subtração = ' + subtracao(a,b));

function multiplicacao(a,b){
  return a*b;
}
console.log('Multiplicação = ' + multiplicacao(a,b));

function divisao(a,b){
  return a/b;
}
console.log('Divisao = ' + divisao(a,b));

function mod(a,b){
  return a%b;
}
console.log('O resto da divisão entre '+a+ ' e '+ b + ' é igual a ' + mod(a,b) + ' .');
 
//Faça um programa que retorne o maior de dois números. Defina, no começo do programa, duas constantes com os valores que serão comparados.

const x = 1000;
const y = 1000;

function comparaNumeros(x,y){
  if(x>y){
    return x + ' é maior que ' + y + ' .';
  } else if ( y>x){
    return y + ' é maior que ' + x + ' .';
  } else {
    return 'Os números são iguais.'
  }
}
console.log(comparaNumeros(x,y));


//Faça um programa que retorne o maior de três números. Defina, no começo do programa, três constantes com os valores que serão comparados.

const a = 1;
const b = 2;
const c = 0;

function comparaTres(a,b,c){
  if(a>b && a>c){
    return 'A é o maior numero';
  } else if (b>a && b>c){
    return 'B é o maior numero';
  } else {
    return 'C é o maior numero';
  }
}
console.log(comparaTres(a,b,c))


//Faça um programa que, dado um valor recebido como parâmetro, retorne “positive” se esse valor for positivo, “negative” se for negativo, e caso não seja nem positivo e nem negativo retorne “zero”.

let value = -6;

function avalia (value){
  if(value<0){
    return "negative";
  } else if (value>0){
    return "positive";
  } else {
    return "zero";
  }
}
console.log(avalia(value));
*/  

// Faça um programa que receba três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false, caso contrário. Se algum ângulo for inválido, o programa deve retornar uma mensagem de erro.

const x = 100;
const y = 30;
const z = 50;

function angleSum(x,y,z){
  if (x < 0 || y<0 || z<0){
    return 'Erro! Número inválido';
  } else if (x+y+z === 180){
    return true;
  } else {
    return false;
  }
}
 console.log(angleSum(x,y,z))
