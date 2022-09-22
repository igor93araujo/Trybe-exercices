/* let a = 100;
let b = 200;

let soma = a+b;
let sub = a-b;
let mult = a*b;
let div = a/b;
let mod = a%b;

console.log(soma);
console.log(sub);
console.log(mult);
console.log(div);
console.log(mod);
 */

/* const x = 3 ;
const y = 4 ;

if (x>y){
  console.log("x é maior.");
} else if (x<y){
  console.log("y é maior");
} */


/* let piece = "PAWNS";

switch (piece.toLowerCase()) {
  case "king":
    console.log("one square in any direction");
    break;
  case "queen":
    console.log("horizontally or vertically any number of squares")
    break;
  case "bishop":
    console.log("diagonally any number of squares");
    break;
  case "knights":
    console.log("two squares in a horizontal or vertical direction, then move one square horizontally or vertically");
    break;
  case "pawns":
    console.log("vertically forward one square, with the option to move two squares if they have not yet moved.");
    break;
} */


const compra = 2000;
const venda = 5000;


if (compra < 0 || venda < 0) {
  console.log("Erro! Entre com valor válido!");
} else {
  const custo = compra + (compra * 0.2);
  const lucro = venda - custo;
  console.log(lucro);
}
