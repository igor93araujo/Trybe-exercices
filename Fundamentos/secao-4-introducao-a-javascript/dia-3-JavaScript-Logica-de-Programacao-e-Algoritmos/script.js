let numbers=[];
let n= 10;
let fatorial=1;

for (let index = 1; index <= n; index++) {
   numbers.push(index);
}

console.log(numbers);

for (let index = n-1; index>=1; index--) { 
      fatorial = fatorial * numbers[index];
}

console.log("O fatorial é: " + fatorial + ".");
