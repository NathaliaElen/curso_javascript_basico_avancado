//objetos básico
// const pessoa1 = {
//     nome: 'Nathália',
//     sobrenome: 'Elen',
//     idade: 20,
//     escolaridade: 'Ensino superior em andamento'
// };
// console.log(pessoa1.nome);
// console.log(pessoa1.sobrenome);
// console.log(pessoa1.idade);
// console.log(pessoa1.escolaridade);

//function factory, ou seja, fábrica de criação de objetos
function criaPessoa(nome,sobrenome,idade,escolaridade){
    return {
        nome: nome,
        sobrenome: sobrenome,
        idade: idade,
        escolaridade: escolaridade
    }
}
const pessoa1 = criaPessoa('Nathália','Elen',20,'Ensino superior em andamento');
console.log(pessoa1);
const pessoa2 = criaPessoa('Otávio','Miranda',45,'Mestrado');
console.log(pessoa2);