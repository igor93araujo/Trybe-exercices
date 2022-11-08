//1 - soma de numero indeterminado de parametros
/* const sum = (...numbers) => numbers.reduce((acc, number)=> acc + number); */
//console.log(sum(4,5,6))

//2 - juntando 2 arrays;
/* const array1 = ['a', 'b', 'c'];
const array2 = ['d', 'e', 'f'];

let array3 = []; */
//com foreach:
/* array1.forEach((arr)=>array3.push(arr));
array2.forEach((arr)=>array3.push(arr));
//com spreadOperator:
array3 = [...array1, ...array2]; */
//console.log(array3);

//Dica para fazer um objeto novo:
/* const obj1 = {name:'igor', pixIgor: 100};
const obj2 = {apelido:'dindo', gosta: 'dinheiro'}
const obj3 = {...obj1, ...obj2}; */
//console.log(obj3);
 
//3 - desestructuring
/* const alex = {
  name: 'Alex',
  age: 26,
  likes: ['fly fishing','skating','cooking'],
  nationality: 'Australian',
}; */

//const {name, age, nationality} = alex;
//console.log(`${name} tem ${age} anos e é ${nationality}`)
//pegar o valor inteiro da chave em forma de array:
//onst {likes} = alex;
//console.log(likes)
//pegar os 3 primeiros do array?
//const[a,b,c] = likes;
//console.log(a,b,c)
//criar um objeto com 2 elementos:
//const obj ={second: b, third: c} /* é igual a */ {b,c} //b e c sao nomes de variáveis
//console.log(obj);


//4 -Faça uma função que receba um objeto representando um animal e retorne sua massa:

const lion ={
  name:' pantera',
  commonName: 'Leao',
  pesoMedio: {
    min: 100,
    max: 300,
    medida: 'kg',
  }
}
const animalDescribing = ({name, commonName, pesoMedio}) => {
  const {min, max, medida = 'kg'} = pesoMedio; //quando nao tem kg num elemento, coloca o kg como default.
  return `${commonName} (${name}) pesa aprox ${min}-${max} ${medida}`;
}
//console.log(animalDescribing(lion));

//5-Faça uma função que receba um numero e retorne um num multiplicado por outro fator. Se nenhum for passado, a função deve retornar a multiplicação por 1.

const multiply = (number, factor =1) => number*factor; //colocar um valor padrao caso nao tenha nenhum passado.

//console.log(multiply(8));
//console.log(multiply(8,10));