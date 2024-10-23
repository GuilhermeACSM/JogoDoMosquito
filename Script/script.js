let altura, largura = 0
let intervaloMosquito = 2000
let vidas = 1
let tempo = 15

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
    }

    /*
    if(vidas > 3){
        window.location.href = 'fim_de_jogo.html'}
        else {
        document.getElementById('v' + vidas).src = 'imagens/coracao_vazio.png'
        vidas++
    }
    */

    let posicaoX = Math.floor(Math.random() * largura) - 100
    let posicaoY = Math.floor(Math.random() * altura) - 100

    posicaoX = posicaoX < 0 ? 0 : posicaoX
    posicaoY = posicaoY < 0 ? 0 : posicaoY

    console.log(`Posição X: ${posicaoX}, Posição Y: ${posicaoY}`)

    //criar o elemento HTML
    let mosquito = document.createElement('img')
    mosquito.src = '../img/mosquito.png'
    mosquito.className = 'mosquito1'
    mosquito.style.left = `${posicaoX}px`
    mosquito.style.top = `${posicaoY}px`
    mosquito.style.position = 'absolute'
    mosquito.id = 'mosquito'

    document.body.appendChild(mosquito)
}


// ------------ DIFICULDADE ------------- //
// Função para definir o intervalo com base na dificuldade selecionada
function defineDificuldade() {
    let dificuldade = document.getElementById('dificuldade').value
    switch (dificuldade) {
        case 'facil':
            intervaloMosquito = 1500 // A cada 1,5 segundos
            break
        case 'normal':
            intervaloMosquito = 800 // A cada 0,8 segundos
            break
        case 'dificil':
            intervaloMosquito = 500 // A cada 0,5 segundo
            break
    }
    console.log(`Dificuldade selecionada: ${dificuldade}, Intervalo: ${intervaloMosquito}`)
}

// ------------ CRONOMETRO ------------- //

// ------------ INICIAR JOGO ------------- //
function iniciarJogo() {
        let dificuldade = document.getElementById('dificuldade').value; // Captura a dificuldade
        defineDificuldade(); // Chama a função para definir o intervalo

        //Redireciona para a nova página passando a dificuldade como parâmetro
        window.location.href = "pagJogo.html?dificuldade=" + dificuldade;
}

