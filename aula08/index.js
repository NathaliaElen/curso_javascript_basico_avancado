//exercício de fixação
const nome = 'Nathália Elen';
const sobrenome = 'De Souza';
const idade = 20;
const peso = 90;
const alturaEmMetros = 1.65;
let imc;
let anoNascimento;

imc = peso / alturaEmMetros ** 2;
anoNascimento = 2022 - idade;

console.log(`${nome + ' ' + sobrenome} tem ${idade} anos, pesa ${peso}kg, tem ${alturaEmMetros} de altura e seu IMC é de ${imc.toFixed(2)}`);
console.log(`${nome} nasceu em ${anoNascimento}`);