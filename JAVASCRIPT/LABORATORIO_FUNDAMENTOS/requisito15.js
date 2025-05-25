/* Crie uma função que receba um array de valores de investimento que você quer fazer e um segundo parâmetro que é seu nome.
Função: gerarListaInvestimento();
Entrada: [5000, 1200, 12000, 15000];
Saída: [{investimento: 5000, nome: "Paulo"}, {investimento: 1200, nome: "Paulo"},{investimento: 12000, nome: "Paulo"}, {investimento: 15000, nome: "Paulo"},]; */

function gerarListaInvestimento(valores, nome) {
    valores.sort((a, b)=> a.investimento < b.investimento ? -1 : 1);
    return valores.map(investimento => ({ investimento, nome }));
}

// Testando a função
const valoresInvestimento = [5000, 1200, 12000, 15000];
console.log(gerarListaInvestimento(valoresInvestimento, "Paulo"));

/* Explicação:
A função usa .map() para percorrer o array de valores.

Para cada valor, cria um objeto { investimento, nome }.

Retorna o novo array de objetos */