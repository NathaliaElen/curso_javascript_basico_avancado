/*operadores lógicos: checam mais de uma comparação

&& -> AND -> todas as expressões precisam ser verdadeiras para retornar true

|| -> OR -> apenas uma das expressões deve ser verdadeira para retornar true

! -> NOT -> inverte uma expressão, o que é true vai se tronar false, o que é false vai se tornar true
*/

let n1 = 10 > 5; //true
let n2 = 10 < 5; //false
console.log(n1 && n2); //false
console.log(n1 || n2); //true
console.log(!n1); //false
console.log(!n2); //true

console.log(true && true); //true
console.log(true && false); //false
console.log(false && true); //false
console.log(false && false); //false

console.log(true || true); //true
console.log(true || false); //true
console.log(false || true); //true
console.log(false || false); //false

const usuario = 'Luiz';
const senha = 1234;
const vaiLogar = usuario === 'Luiz' && senha === 1234;
console.log(vaiLogar); //true
console.log(!vaiLogar); //false


