//https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API/Using_the_Web_Speech_API

// Reconhecimento de voz | Usando a API Web Speech

const elementoChute = document.getElementById('chute')


window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition

const recognition = new SpeechRecognition()
recognition.lang = 'pt-Br'
recognition.start()


recognition.addEventListener('result', onSpeak) //onSpeak exibe de fato tudo o que é falado.

function onSpeak(e) {
    chute = e.results[0][0].transcript
    exibeChuteNaTela(chute)
    verificaSeOChutePossuiUmValorValido(chute)
}

function exibeChuteNaTela(chute) {
    elementoChute.innerHTML = `
        <div>Você disse</div>
        <span class="box">${chute}</span>
    `
}

//  quando a função acabar (end), volta a ligar o microfone. 
recognition.addEventListener('end', () => recognition.start())