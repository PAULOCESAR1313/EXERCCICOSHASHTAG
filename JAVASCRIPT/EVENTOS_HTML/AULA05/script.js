function criarElementoInnerText()
{
    const ul = document.getElementById("lista-de-elementos");

    const novaLi = document.createElement("li");
    novaLi.innerText = "Novo input com innerText";

    const novoInput = document.createElement("input");

    novaLi.appendChild(novoInput);
    ul.appendChild(novaLi);
};

function criarElementoTextContent()
{
    const ul = document.getElementById("lista-de-elementos");
    const novaLi = document.createElement("li");
    const input = document.createElement("input");

    novaLi.textContent = "Digite aqui";
    novaLi.appendChild(input);
    ul.appendChild(novaLi);
};

function criarElementoInnerHtml()
{
   const ul = document.getElementById("lista-de-elementos");
   const novaLi = document.createElement("li");

   novaLi.innerHTML = "Home";
   ul.appendChild(novaLi);
};