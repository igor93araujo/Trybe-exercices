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


/* const compra = 2000;
const venda = 5000;


if (compra < 0 || venda < 0) {
  console.log("Erro! Entre com valor válido!");
} else {
  const custo = compra + (compra * 0.2);
  const lucro = venda - custo;
  console.log(lucro);
}
 */

let salarioBruto = 3000.00;
let inss;
let ir;


if (salarioBruto <= 1556.94) {
  inss = salarioBruto * 0.08;
} else if (salarioBruto >= 1556.95 && salarioBruto <= 2594.92) {
  inss = salarioBruto * 0.09;
} else if (salarioBruto >= 2594.93 && salarioBruto <= 5189.82) {
  inss = salarioBruto * 0.11;
} else if (salarioBruto >= 5189.82) {
  inss = 570.88;
}

let salarioBase = salarioBruto - inss; 

if (salarioBase <= 1903.98) {
  ir = 0;
} else if (salarioBase >= 1903.99 && salarioBase <= 2826.65) {
  ir = (salarioBase * 0.075) - 142.80;
} else if (salarioBase >= 2826.22 && salarioBase <= 3751.05) {
  ir = (salarioBase * 0.15) - 354.80;
} else if (salarioBase >= 3751.06 && salarioBase <= 4664.68) {
  ir = (salarioBase * 0.225) - 636.16;
} else if (salarioBase > 4994.68) {
  ir = (salarioBase * 0.275) - 869.36;
}

salarioLiquido = salarioBruto - inss - ir;

console.log(salarioLiquido);


