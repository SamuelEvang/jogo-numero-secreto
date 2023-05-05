function verificaSeOChutePossuiUmValorValido(chute) {
    const numero = +chute

    if (chuteForInvalido(numero)) {
        elementoChute.innerHTML += `
        <div>Valor inválido</div>

        <button id="jogar-novamento" class="btn-jogar">Jogar novamente</button>
        
        `
        return
    }

    if (numeroForMaiorOuMenorQueOValorPermitido(numero)){ 
        elementoChute.innerHTML += `
        <div>Valor inválido: Fale o número entre ${menorValor} e ${maiorValor}</div>
        
        <button id="jogar-novamento" class="btn-jogar">Jogar novamente</button>
        `
        return
    }


    if (numero === numeroSecreto) {
        document.body.innerHTML = `
        <h2>Você acertou!</h2>
        <h3>O número secreto era ${numeroSecreto}</h3>
        
        <button id="jogar-novamento" class="btn-jogar">Jogar novamente</button>
        `

    } else if (numero > numeroSecreto) {
        elementoChute.innerHTML = ` 
        <div>O número secreto é menor <i class="fa-solid fa-arrow-down"></i></div>
        
        `
    } else {
        elementoChute.innerHTML = ` 
        <div>O número secreto é menor <i class="fa-solid fa-arrow-up"></i></div>
        
        `
    }

}

function chuteForInvalido(numero) {
    return Number.isNaN(numero)
}



function numeroForMaiorOuMenorQueOValorPermitido(numero) {
    return numero > maiorValor || numero < menorValor 
}

//no documento html na tag body está sendo adicionada um evento = (e) de click e se clicar no botão com class = "jogar-novamente" ele aciona o recarregamento = (reload) no local = (guarda a url da pagina)

document.body.addEventListener('click', e => {
    if (e.target.id === 'jogar-novamento') {
        window.location.reload()
    }
})