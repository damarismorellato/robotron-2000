//mostrando e ocultando lista
//utilizei o data-attribute para pegar o seletor do botão com o value mostrar e ocultar
const botao = document.querySelectorAll("[data-botao]")

//utilizei a class da lista para manipular o display
const lista = document.querySelector('.lista');

//para cada clique o botão, será excutada a função mostraOculta
botao.forEach((elemento) => {
  elemento.addEventListener("click", (evento) => {
    mostraOculta(evento.target.dataset.botao)
  })
})

// a função recebe como argumento o value do botão e verifica se esta recebendo a string mostra ou oculta
function mostraOculta(botao) {
  if (botao === "mostra") {
    lista.style.display = 'block';
  } else if (botao === "oculta") {
    lista.style.display = 'none'
  }
}






























