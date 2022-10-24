const generateNumber = () => {
  const number = Math.floor(Math.random()*6);
  return number;
}
//console.log(generateNumber());

const checkLottery = (yourNumber, generateNumber) => {
  return yourNumber === generateNumber() ? "Parabéns, você ganhou!" : "Tente novamente :("
}

console.log(checkLottery(4, generateNumber));





