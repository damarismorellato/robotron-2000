//const elemento = document.querySelector('#calcular')

//elemento.addEventListener('click', () => {
  //  console.log('fui clicado ');
//});

const elemento = document.querySelector("#calcular");
const resultado = document.querySelector(".resultado");

elemento.addEventListener("click", (evento) => {
  resultado.innerHTML = "Fui clicado"
})
