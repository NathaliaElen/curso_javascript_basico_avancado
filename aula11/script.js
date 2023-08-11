//conversão de string para número
let n1 = Number(prompt("Digite um número: "));
let n2 = Number(prompt("Digite outro número: "));

let soma = n1 + n2;

alert(`A soma de ${n1.toFixed(1).replace('.', ',')} e ${n2.toFixed(1).replace('.', ',')} é igual a ${soma.toFixed(1).replace('.', ',')}`);