/* let names = ['João', 'Maria', 'Antônio', 'Margarida'];

for (let name of names){
  console.log(name)
}
________________________________________________________-
for(i=0; i<names.length;i++){
  console.log(names[i]);
}


function dice () { 
  return Math.ceil(Math.random() * 6);
}
let d1 = dice();
let d2 = dice();
while (d1 === d2) {
  d2 = dice();
} */

/* 🚀 Lidando com Arrays */

/* Percorra o array imprimindo todos os valores nele contidos com a função console.log();

Some todos os valores contidos no array e imprima o resultado;

Calcule e imprima a média aritmética dos valores contidos no array;

A média aritmética é o resultado da soma de todos os elementos dividido pelo número total de elementos.
Com base no código que acabou de gerar, faça com que, caso o valor final seja maior que 20, imprima a mensagem: “valor maior que 20”. Caso não seja, imprima a mensagem: “valor menor ou igual a 20”;

Utilizando for, descubra qual o maior valor contido no array e imprima-o;

Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: “nenhum valor ímpar encontrado”;

Utilizando for, descubra qual o menor valor contido no array e imprima-o;

Utilizando for, crie um array que vá de 1 até 25 e imprima o resultado;

Utilizando o array que acabou de criar, imprima o resultado da divisão de cada um dos elementos por 2. */

/*
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];


 for (let i=0; i<numbers.length; i++){
  console.log(numbers[i]);
} 
let quant=0;
let soma=0;

for (let i=0; i<numbers.length; i++){
  quant = quant + 1 ;
  soma = soma + numbers[i];
}
let media = soma/quant;
console.log('A média aritimética é: ' + media);

if (media > 20){
  console.log('valor maior que 20');
} else {
  console.log('valor menor ou igual a 20');
}
 

let maior=numbers[0];
for (let i=0; i<numbers.length; i++){
  if(numbers[i]>maior){
    maior = numbers [i];
  }
}
console.log(maior);


let quant = 0;
for (let i=0; i<numbers.length; i++){
  if(numbers[i] = numbers[i]&2!=0){
    quant = quant+1;
  }
}
if(quant!=0){
  console.log(quant);
} else {
  console.log("nenhum valor ímpar encontrado");
}

let menor=numbers[0];

for (let i=0; i<numbers.length; i++){
  if(numbers[i]<menor){
    menor = numbers[i];
  }
}
console.log(menor);
*/

let arr = [];

for (let index = 1; index <= 25; index+=1) {
  arr.push(index)
}
console.log(arr)
