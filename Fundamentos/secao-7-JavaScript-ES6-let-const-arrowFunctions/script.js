const testingScope = (escopo) => { 
  if (escopo === true) {
    let ifScope = 'Não devo ser utilizada fora do meu escopo (if)'; // Alterando o tipo da variável para const
    ifScope = ifScope + ' ótimo, fui utilizada no escopo!';
    console.log(ifScope);
  } else {
    const elseScope = 'Não devo ser utilizada fora do meu escopo (else)'; // Alterando o tipo da variável para const
    console.log(elseScope);
  }
};

testingScope(true); 

const oddsAndEvens = [13, 3, 4, 10, 7, 2];
console.log(`Os números ${oddsAndEvens.sort((a,b) => a-b)} se encontram ordenados de forma crescente`); // será necessário alterar essa linha 😉

/* const factorial = (N) => {
  let result = 1; //pq se deve começar com 1 e não com 0?
  for(let i = 2; i<=N; i+=1){ //aqui, o i pode começar em 2, pois 1*1 = 1 do mesmo jeito.
    result *= i;
  }
  return result
}
const resultado = factorial(4);
console.log(`Esse é o fatorial: ${resultado}.`); */

const factorial = (N) => N > 1 ? N * factorial(N-1) : 1;
console.log(`Esse é o fatorial: ${factorial(4)}.`);


let longestWord = 'Antônio foi ao banheiro e não sabemos o que aconteceu'; // retorna 'aconteceu'
let array = [];
array = longestWord.split(' ');
let biggest = array[0];
for (let i = 0; i<array.length; i+=1){
  if(array[i].length>biggest.length){
    biggest = array[i];
  }
}
console.log(biggest);



