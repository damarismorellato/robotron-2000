
//busca todas as class de controle ajuste(butões - e +)
const controle = document.querySelectorAll(".controle-ajuste")

// para cada click no elemento do array controle, onde tiver um - ou + e a class controle-contador, soma ou subtrai a peça escolhida.
controle.forEach((elemento) => {
    elemento.addEventListener("click", (evento) => {
        manipulaDados(evento.target.textContent, evento.target.parentNode)
        console.log(controle);
    })
})

function manipulaDados(operacao, controle) {
    const peca = controle.querySelector(".controle-contador");

    if (operacao === "-") {
        peca.value = parseInt(peca.value) - 1
    } else {
        peca.value = parseInt(peca.value) + 1
    }
}