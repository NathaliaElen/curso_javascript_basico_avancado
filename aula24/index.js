const maioridade = 21;

if (maioridade >= 18) {
    console.log('De maior!');
} else {
    console.log('De menor!');
} //condicional composta

const hora = 20;

if (hora >= 0 && hora < 12) {
    console.log('Bom dia!');
} else {
    if (hora < 18 ) {
        console.log('Boa tarde');
    } else {
        console.log('Boa noite!');
    }
} //condicional aninhada