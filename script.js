const aluno = document.getElementById('detalhe-aluno')
let valor = document.getElementById('valor')
let antes = document.getElementById('antes')
let depois = document.getElementById('depois')
let depoimento =document.getElementById('depoimento')
let titulo = document.getElementById('titulo')
function abriraluno(pessoa) {
    aluno.classList.remove('sumir')
    aluno.addEventListener("animationend", ()=> {
        aluno.style.display = 'block'
    })
    aluno.style.display = 'block'
    aluno.scrollTop = 0
    if (pessoa == 'cab1') {
        valor.innerText = 'R$30,00'
        depoimento.innerText = 'Amei o resultado final, sempre vou repetir.'
        antes.src = 'antes1.png'
        depois.src = 'trança.png'
        titulo.innerText = 'Trança Única'
    }if (pessoa == 'cab2') {
        valor.innerText = 'R$25,00'
        depoimento.innerText = 'ótima profissional, muito cuidadosa nos detalhes.'
        antes.src = 'antes2.png'
        depois.src = 'trança2.png'
        titulo.innerText = 'Trança Dupla'
    }if (pessoa == 'cab3') {
        valor.innerText = 'R$40,00'
        depoimento.innerText = 'Fiquei muito GATA, recomendo sempre.'
        antes.src = 'antes3.png'
        depois.src = 'tinta.png'
        titulo.innerText = 'Loiro Natural'
    }if (pessoa == 'cab4') {
        valor.innerText = 'R$20,00'
        depoimento.innerText = 'Não achei que ficaria melhor, muito bom.'
        antes.src = 'antes4.png'
        depois.src = 'progre.png'
        titulo.innerText = 'Progressiva'

    }
}


function fecharaluno() {
    aluno.classList.add('sumir')
    aluno.addEventListener('animationend', ()=> {
        aluno.style.display = 'none'
    })
}    






