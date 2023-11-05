//tudo pode ser avaliado em verdadeiro ou falso
// operador && precisa que todas as informações sejam verdadeiras
// operador || qualquer uma das opções ser verdadeiro para retornar verdadeiro

console.log('Nathália Elen' && 0 && 'Maria'); //retorna o valor avaliado em falso

console.log('Nathália' && 'Maria');

function falaoi() {
    return 'Oi';
}
const vaiExecutar = false;
console.log(vaiExecutar && falaoi);

console.log(0 || false || null | 'Nathália Elen' || true);

const corUsuario = null;
const corPadrao = corUsuario || 'Blue';
console.log(corPadrao);
