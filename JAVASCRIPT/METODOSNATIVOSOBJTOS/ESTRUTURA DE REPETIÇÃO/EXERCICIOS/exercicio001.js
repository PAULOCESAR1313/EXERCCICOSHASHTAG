//EXERCICIO - 001
//VERIFICA DESCONTO - Crie um programa que verificaDesconto deve mostrar se um cliente tem ou não direito ao desconto, criterio para desconto, a compra deve ser maior ou igual a R$ 100,00 reais. O programa deve mostrar o valor da compra o valor do desconto o valora a pagar.

let descontoPercenual = 10;
let compra = 30;

function verificaDesconto()
{
    let calcDesconto = ((compra * descontoPercenual) / 100);
    let desconto = compra - calcDesconto;


    if(compra >= 100)
    {
        console.log("Parabéns, você ganhou um desconto de 10%");
        console.log(`VALOR DA COMPRA: R$ ${compra},00 reais, DESCONTO: R$ ${calcDesconto},00 reais TOTAL A SER PAGO R$ ${desconto},00 reais`);
    } else 
    {
        console.log(`VALOR DA COMPRA: R$ ${compra},00 reais, TOTAL A SER PAGO R$ ${compra},00 reais`);
        console.log("Obrigado pela preferencia!");
    }
}

verificaDesconto();
