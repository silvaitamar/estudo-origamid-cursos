// Crie uma função para verificar se um valor é Truthy
function isTruthy(valor) {
    return !!valor;
}
console.log(isTruthy(13));

// Crie uma função matemática que retorne o perímetro de um quadrado
// lembrando: perímetro é a soma dos quatro lados do quadrado
function perimetroQuadrado(valor) {
    return valor * 4;
}
console.log(perimetroQuadrado(2));

// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome
// usar template string (o padrão para template string é `${var}`)
function nomeCompleto(nome, sobrenome) {
    return `${nome} ${sobrenome}`;
}
console.log(nomeCompleto('Itamar', 'Silva'));

// Crie uma função que verifica se um número é par
function isEven(valor) {
    if(valor % 2 === 0){
        return true;
    }
    else{
        return false;
    }
}
console.log(isEven(13));

// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)
function isDataType(valor) {
    return typeof valor;
}
console.log(isDataType(true));

// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'click' ocorrer.
addEventListener('click', function(){
    this.console.log('Itamar');
});

// Corrija o erro abaixo
/**
function precisoVisitar(paisesVisitados) {
    var totalPaises = 193;
  return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
}
function jaVisitei(paisesVisitados) {
  return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
}

precisoVisitar(20);
jaVisitei(1);
*/
var totalPaises = 193;
function precisoVisitar(paisesVisitados) {
  return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
}
function jaVisitei(paisesVisitados) {
  return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
}

console.log(precisoVisitar(20));
console.log(jaVisitei(1));