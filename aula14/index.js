//numbers

let num1 = 10.654378;
let num2 = 3;
num1 = num1.toFixed(1).replace('.', ',');
let s = num1 + num2;

console.log(typeof num1);
console.log(typeof num2);
console.log(s);
console.log(Number.isInteger(num1));
console.log(Number.isInteger(num2));
console.log(Number.isNaN(num1));
console.log(Number.isNaN(num2));

let n1 = '0.7';
let n2 = 0.3;
n1 = Number(n1);
let soma = n1 + n2;
console.log(soma.toFixed(1));
console.log(typeof n1);
console.log(typeof n2);
