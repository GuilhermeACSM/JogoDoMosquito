let altura, largura = 0

function ajustaTamanhoTela() {
    altura = window.innerHeight
    largura = window.innerWidth
    console.log("Largura:", largura, "Altura:", altura)
}

ajustaTamanhoTela()

function randomizaPosicao(){

    let posicaoX = Math.floor(Math.random() * largura) -50
    let posicaoY = Math.floor(Math.random() * altura) -50

    posicaoX = posicaoX < 0 ? 0 : posicaoX 
    posicaoY = posicaoY < 0 ? 0 : posicaoY 

    console.log(posicaoX, posicaoY)

    //criar o elemento HTML
    let mosquito = document.createElement('imagem')
    mosquito.src = '../img/mosquito.png'
    mosquito.className = 'mosquito1'
	mosquito.style.left = `${posicaoX}px`
	mosquito.style.top = `${posicaoY}px`
	mosquito.style.position = 'absolute'
    
    document.body.appendChild(mosquito)
}








// TEMPO PARA O MOSQUITO SE MEXER!!!! 

    // Intervalo para reposicionar o mosquito a cada 1,5 segundos
    //FÁCIL 
    //setInterval(positionMosquito, 1500);

    // MÉDIO 
    //setInterval(positionMosquito, 900);

    //DIFÍCIL
    //setInterval(positionMosquito, 500);

