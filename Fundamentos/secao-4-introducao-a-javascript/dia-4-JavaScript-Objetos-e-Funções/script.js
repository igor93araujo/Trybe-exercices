//Crie uma variável player e atribua um objeto contendo as variáveis listadas abaixo:

let player = {
  name:'Marta',
  lastName: 'Silva',
  age: 34,
  medals: {
    golden: 2,
    silver: 3
  }
}
console.log(player.lastName);
console.log(player.medals.silver);

console.log(player['name']+ ' ' + player['age'] + ' ' + player['medals']['golden']);