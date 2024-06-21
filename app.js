let listaSorteados = [];
let numMax = 4
let secretNumber = gerarNum();
let tentativas = 1;

/*let titulo = document.querySelector('h1')
titulo.innerHTML = "Jogo do número secreto"

let paragrafo = document.querySelector('p')
paragrafo.innerHTML = "Escolha um número entre 1 e 100"
*/
//Abaixo estará fazendo a mesma coisa só que mais simples (usando função)

function exibirTextoNaTela(tag, conteudo) {
    let campo = document.querySelector(tag);
    campo.innerHTML = conteudo;
    responsiveVoice.speak(conteudo, 'Brazilian Portuguese Female', {rate:1.2});
}

function textosIniciais() {
exibirTextoNaTela('h1', "Jogo do número secreto");
exibirTextoNaTela('p', `Escolha um número entre 1 e ${numMax}`);
}

textosIniciais();

function verificarChute() {
    let chute = document.querySelector('input').value;
    let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa";
    if(chute == secretNumber) {
        exibirTextoNaTela('p', `Parabéns! Você conseguiu descobrir o número secreto (${secretNumber}) com ${tentativas} ${palavraTentativa}.`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else if(chute > secretNumber){
        exibirTextoNaTela('p', `O número é menor que ${chute}`);
    } else{
        exibirTextoNaTela('p', `O número é maior que ${chute}`);
    }
    tentativas++
    limparCampo();
}

function gerarNum() {
    let numeroEscolhido = parseInt(Math.random() * numMax + 1);
    let qtdNumerosSorteados = listaSorteados.length;
    if(qtdNumerosSorteados == numMax) {
        listaSorteados = [];
    }

    if(listaSorteados.includes(numeroEscolhido)) {
        return gerarNum();
    } else {
        listaSorteados.push(numeroEscolhido);
        console.log(listaSorteados);
        return numeroEscolhido;
    }
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo() {
    secretNumber = gerarNum();
    limparCampo();
    tentativas = 1
    textosIniciais()
    document.getElementById('reiniciar').setAttribute('disabled', true);
}