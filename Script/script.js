let altura, largura = 0;
let intervaloMosquito;
let vidas = 1;
let tempo = 15;
let ponto = 0;

let criarMosquito; // Variável para controlar o intervalo de criação dos mosquitos

// ------------ TAMANHO DA TELA ------------- //
function ajustaTamanhoTela() {
    altura = window.innerHeight;
    largura = window.innerWidth;
}

ajustaTamanhoTela();

// ------------ POSIÇÃO DO MOSQUITO NA TELA ------------- //
function randomizaPosicao() {

    if (document.getElementById('mosquito')) {
        document.getElementById('mosquito').remove();

        if (vidas > 3) {
            window.location.href = 'fim_de_jogo.html';
        } else {
            document.getElementById('v' + vidas).src = 'img/coracao_vazio.png';
            vidas++;
        }
    }

    let posicaoX = Math.floor(Math.random() * largura) - 100;
    let posicaoY = Math.floor(Math.random() * altura) - 100;

    posicaoX = posicaoX < 0 ? 0 : posicaoX;
    posicaoY = posicaoY < 0 ? 0 : posicaoY;

    let mosquito = document.createElement('img');
    mosquito.src = '../img/mosquito.png';
    mosquito.className = 'mosquito1';
    mosquito.style.left = `${posicaoX}px`;
    mosquito.style.top = `${posicaoY}px`;
    mosquito.style.position = 'absolute';
    mosquito.id = 'mosquito';

    // Variar o tamanho do mosquito aleatoriamente
    let tamanho = Math.floor(Math.random() * 3); // Valores 0, 1 ou 2
    mosquito.className = `mosquito${tamanho}`;

    // Aplicar rotação aleatória entre -45 e 45 graus
    let rotacao = Math.floor(Math.random() * 90) - 45;
    mosquito.style.transform = `rotate(${rotacao}deg)`;

    mosquito.onclick = function() {
        ponto++;
        document.getElementById('pontos').innerHTML = ponto;
        this.remove();
    };

    if (ponto >= 5) {
        clearInterval(criarMosquito);
        localStorage.setItem('pontos', ponto);
        window.location.href = 'vitoria.html';
    }

    document.body.appendChild(mosquito);
}

// ------------ DIFICULDADE ------------- //
function defineDificuldade() {
    let dificuldade = localStorage.getItem('dificuldade'); // Obtém a dificuldade salva
    switch (dificuldade) {
        case 'facil':
            intervaloMosquito = 1500;
            break;
        case 'normal':
            intervaloMosquito = 1000;
            break;
        case 'dificil':
            intervaloMosquito = 600;
            break;
    }

    // Inicia o intervalo de criação dos mosquitos com base na dificuldade
    criarMosquito = setInterval(randomizaPosicao, intervaloMosquito);
}

// ------------ CRONOMETRO ------------- //
let cronometro = setInterval(function() {
    tempo--;
    document.getElementById('cronometro').innerHTML = `Tempo restante: ${tempo}`;

    if (tempo <= 0) {
        clearInterval(cronometro);
        clearInterval(criarMosquito);
        if (document.getElementById('mosquito')) {
            document.getElementById('mosquito').remove();
        }
        alert(`Tempo esgotado! Você fez ${ponto} pontos!`);
        localStorage.setItem('pontos', ponto);
        window.location.href = 'index.html';
    }
}, 1000);

// ------------ INICIAR JOGO ------------- //
function iniciarJogo() {
    let dificuldade = document.getElementById('dificuldade').value;
    localStorage.setItem('dificuldade', dificuldade);
    window.location.href = `pagJogo.html?dificuldade= ${dificuldade}`;
}

// ------------ REINICIAR JOGO ------------- //
function reiniciar() {
    window.location.href = "index.html";
}
