// BODY = DOCUMENT
// getElement = busca o elemento presente no document pelo ID com .value
// innerHTML = escreve dentro de um elemento

function somar(){
    var numero1 = parseInt(document.getElementById('numero1').value)
    var numero2 = parseInt(document.getElementById('numero2').value)
    var soma = numero1 + numero2
    document.getElementById('resultado').innerHTML = 'Soma = ' + soma
}