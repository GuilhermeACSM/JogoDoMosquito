let altura, largura = 0
let intervaloMosquito = 2000
let vidas = 1
let tempo = 15
let ponto = 0;


// ------------ TAMANHO DA TELA ------------- //
function ajustaTamanhoTela() {
    altura = window.innerHeight
    largura = window.innerWidth
    console.log(`Largura: ${largura}  Altura: ${altura}`)
}

ajustaTamanhoTela()

// ------------ POSIÇÃO DO MOSQUITO NA TELA ------------- //
function randomizaPosicao() {

    if (document.getElementById('mosquito')) {
        document.getElementById('mosquito').remove()

        // Aumenta a contagem de vidas e verifica se o jogo acabou
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

    console.log(`Posição X: ${posicaoX}, Posição Y: ${posicaoY}`);

    // Criar o elemento HTML do mosquito
    let mosquito = document.createElement('img');
    mosquito.src = '../img/mosquito.png';
    mosquito.className = 'mosquito1';
    mosquito.style.left = `${posicaoX}px`;
    mosquito.style.top = `${posicaoY}px`;
    mosquito.style.position = 'absolute';
    mosquito.id = 'mosquito';

    // Adiciona um evento de clique no mosquito
    mosquito.onclick = function() {
        ponto++; // Incrementa a pontuação
        document.getElementById('pontos').innerHTML = ponto; // Atualiza a pontuação na tela
        this.remove(); // Remove o mosquito clicado
    }

    // Verifica se atingiu 10 pontos
    if (ponto >= 10) {
        clearInterval(intervaloMosquito); // Para de gerar mosquitos
        // Salva a pontuação no localStorage
        localStorage.setItem('pontos', ponto);
        // Redireciona para a página de vitória
        window.location.href = 'vitoria.html';
    }

    document.body.appendChild(mosquito);
}


// ------------ DIFICULDADE ------------- //
// Função para definir o intervalo com base na dificuldade selecionada
function defineDificuldade() {
    let dificuldade = document.getElementById('dificuldade').value;
    switch (dificuldade) {
        case 'facil':
            intervaloMosquito = 1500; // A cada 1,5 segundos
            break;
        case 'normal':
            intervaloMosquito = 800; // A cada 0,8 segundos
            break;
        case 'dificil':
            intervaloMosquito = 500; // A cada 0,5 segundo
            break;
    }
    console.log(`Dificuldade selecionada: ${dificuldade}, Intervalo: ${intervaloMosquito}`);
}

// ------------ CRONOMETRO ------------- //
function iniciarCronometro() {
    let cronometro = setInterval(function() {
        tempo--;
        document.getElementById('cronometro').innerHTML = tempo;

        // Se o tempo acabar, termina o jogo
        if (tempo <= 0) {
            clearInterval(cronometro); // Para o cronômetro
            clearInterval(intervaloMosquito); // Para de gerar mosquitos
            if (document.getElementById('mosquito')) {
                document.getElementById('mosquito').remove(); // Remove o mosquito se existir
            }
            alert(`Tempo esgotado! Você fez ${ponto} pontos!`); // Mostra a pontuação final
            
            // Salva a pontuação no localStorage
            localStorage.setItem('pontos', ponto);
            // Redireciona para a página de vitória
            window.location.href = 'index.html';
        }
    }, 1000); // Decrementa o tempo a cada segundo
}

// ------------ INICIAR JOGO ------------- //
function iniciarJogo() {
    let dificuldade = document.getElementById('dificuldade').value; // Captura a dificuldade

    // Salva a dificuldade no localStorage para a próxima página
    localStorage.setItem('dificuldade', dificuldade);

    // Redireciona para a nova página sem perder a dificuldade
    window.location.href = "pagJogo.html?dificuldade=" + dificuldade;
}


// ------------ REINICIAR JOGO ------------- //
function reiniciar() {
    window.location.href = "index.html"
}