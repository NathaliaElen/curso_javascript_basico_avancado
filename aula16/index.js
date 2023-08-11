//array

const alunos = ['Nathália','Samuel','Juliana','João'];

alunos[3] = 'Edenilson';

alunos.push('Maria');
alunos.unshift('Thiago');

alunos.pop();
alunos.shift();

console.log(alunos[3]);
console.log(alunos);
console.log(alunos.slice(0, 3));
console.log(alunos.length);