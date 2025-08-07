const botaoMostraPalavras = document.querySelector('#botao-palavrachave');

botaoMostraPalavras.addEventlistener('click', mostraPalavrasChave);

function mostraPalavrasChave(){
    alert('Fui clicado! ');
}