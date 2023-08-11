// diferença entre tipo de dados primitivos e valores por referência

//tipo primitivo
let nome = 'Luiz';
let nome2 = nome; //cópia, então não vai mudar em seguida
nome = 'Ótavio';
console.log(nome, nome2);

//valor por refência
let a = [1,2,3];
let b = a; 
a.push(4); //como aponta para o mesmo lugar da memória, a e b vão mudar
console.log(a, b);
b.pop();
console.log(a, b);