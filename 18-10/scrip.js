const botao = document.getElementById('meuBotao')
const paragrafo = document.getElementById('texto')
function aumentaFonte() {
    paragrafo.style.fontSize = '30px'
    paragrafo.style.color = "yellow"
    paragrafo.style.fontFamily = "Verdana"
}

botao.addEventListener('click',aumentaFonte)


