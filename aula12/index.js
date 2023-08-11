//exercício de variáveis
let a = 'A'; 
let b = 'B';
let c = 'C';

let varA = b;
let varB = c;
let varC = a;

console.log(varA, varB, varC);

//maneira atual de resolver o exercício
[a,b,c] = [b,c,a];

console.log(a,b,c);