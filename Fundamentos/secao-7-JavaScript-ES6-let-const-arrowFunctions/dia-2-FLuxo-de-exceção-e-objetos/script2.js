/* Parte III */
const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

/* Usando o objeto criado no tópico anterior, crie uma função que retorne o número total de estudantes em todas as aulas. */

function somaEstudantes (){
  let soma = newObject.lesson1.numeroEstudantes.values + newObject.lesson2.numeroEstudantes.values+ newObject.lesson3.numeroEstudantes.values;
  return soma;
}
console.log(somaEstudantes());

/* Crie uma função para adicionar o turno da noite na lesson2. Essa função deve possuir três parâmetros, sendo eles: o objeto a ser modificado, a chave que deverá ser adicionada e o valor dela. */

function addShift(obj,turno,valor){
  obj.turno = valor;
}
addShift(lesson2,'turno','noite')

console.log(lesson2); 

/* Crie uma função para listar as keys de um objeto. Essa função deve receber um objeto como parâmetro. */

function listaChaves(objt){
  console.log(Object.keys(objt));
} 
listaChaves(lesson3);

/* Crie uma função para mostrar o tamanho de um objeto. */

function medeTamanho(){
  console.log(Object.keys(lesson3).length);
} 
medeTamanho();

/* Crie uma função para listar os valores de um objeto. Essa função deve receber um objeto como parâmetro. */

function listaValores(objt){
  console.log(Object.values(objt));
}
listaValores(lesson1);

/* Crie um objeto de nome allLessons, que deve agrupar todas as aulas através do Object.assign. Cada chave desse novo objeto será uma aula, sendo essas chaves: lesson1, lesson2 e lesson3. Ao executar o comando console.log(allLessons), a saída deverá ser a seguinte: */

let newObject = Object.assign({},lesson1,lesson2,lesson3);

console.log(newObject);

/* Usando o objeto criado no tópico anterior, crie uma função que retorne o número total de estudantes em todas as aulas. */

function somaEstudantes (){
  let soma = newObject.lesson1.numeroEstudantes + newObject.lesson2.numeroEstudantes + newObject.lesson3.numeroEstudantes;
  return soma;
}
console.log(somaEstudantes());

/* Crie uma função que verifique se o par (chave / valor) existe na função. Essa função deve possuir três parâmetros, sendo eles: o objeto, o nome da chave e o valor da chave. Exemplo: */

