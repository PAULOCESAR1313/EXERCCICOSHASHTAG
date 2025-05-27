//getElementsByTagName: Seleciona o elemento pelo nome da tag.
const titulo = document.getElementsByTagName("h2");
console.log("Selecionando pelo nome da tag h2:", titulo);

//getElementsByClassName: Seleciona o elemento pelo nome da Class.
const paragrafosItens = document.getElementsByClassName("texto-lista");
console.log("Selecionando pelo nome da Class:", paragrafosItens);

//getElementById: Seleciona o elemento pelo ID.
const destacado = document.getElementById("destacado");

//querySelector: Seleciona um elemento por causa do seletor css.
const destacadoSeletor = document.querySelector("#destacado");
console.log("Seleciona o elemento atraves do seletor CSS:", destacadoSeletor);