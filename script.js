const botaoMostraPalavras = document.querySelector('#botao-palavrachave');

botaoMostraPalavras.addEventListener('click', mostraPalavrasChave);

function mostraPalavrasChave (){
const texto = documdent.querySelector('#entrada-de-texto8').value;
const campoResultado = document.querySelector('#resultado-palavrachave');

campoResultado.textContent = texto;
}