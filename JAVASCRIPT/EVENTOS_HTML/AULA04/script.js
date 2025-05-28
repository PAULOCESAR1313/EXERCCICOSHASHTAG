function criarElemento()
{
    const ul = document.getElementById("lista-de-elementos");

    const novaLi = document.createElement("li");

    const novoInput = document.createElement("input");

    novaLi.appendChild(novoInput);
    novaLi.appendChild(text);
    ul.appendChild(novaLi);
};