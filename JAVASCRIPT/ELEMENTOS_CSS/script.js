let meuElemento = document.getElementById('meuElemento');

function transformarCirculo()
{
    meuElemento.classList.add("circle");
    meuElemento.classList.remove("square");
};
function transformarQuadrado()
{
    meuElemento.classList.add("square");
    meuElemento.classList.remove("circle");
};
function alternarForato()
{
  meuElemento.classList.toggle("circle");
  meuElemento.classList.toggle("square");
};
function verificarClasse()
{
    if(meuElemento.classList.contains("circle"))
    {
        console.log("O meu elemento possui a Classe circle");
    } else
    {
        console.log("O meu elemento possui a Classe square");
    }
};