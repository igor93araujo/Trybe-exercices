const generateNumber = () => {
  const number = Math.floor(Math.random()*6);
  return number;
}
//console.log(generateNumber()); Esse console nao pode aparecer, pois ele gera dois numeros em momentos diferentes chamando a função
const checkLottery = (yourNumber, generateNumber) => { //Como parâmetros, o segundo pametro pode ser qqr palavra, desde seja igual a comparação do retorno com os parenteses. 
  return yourNumber === generateNumber() ? "Parabéns, você ganhou!" : "Tente novamente :("
}

console.log(checkLottery(4, generateNumber));





