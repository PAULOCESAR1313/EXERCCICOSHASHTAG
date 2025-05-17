//EXERCICIO - 002
//Escreva um programa verificarEstoque, que mostre se um produto esta disponivel para compra, criterio, a quantidade do produto tem que ser diferente de zero.

function verificarEstoque(produto, quantidade)
{
    if(quantidade != 0)
    {
        console.log(`Produto: ${produto} está disponivel na quantidade: ${quantidade} unidades`);
    } else
    {
        console.log(`Produto: ${produto} não está disponivel! Quantidade: ${quantidade} unidades`);
    }
};

verificarEstoque("Notboock", 0);