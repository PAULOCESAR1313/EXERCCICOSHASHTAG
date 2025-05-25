/* Crie uma função que receba um array de gastos e retorne o maior gasto e quantas vezes o maior gasto apareceu nesse array.
Função: maiorGasto();
Entrada: maiorGasto(10, 5, 20, 15, 20, 10, 20);
Saída: 20, 3 */

function maiorGasto(...gastos) {
    const maiorValor = Math.max(...gastos);
    const quantidade = gastos.filter(valor => valor === maiorValor).length;
    
    return { maiorValor, quantidade };
}

// Testando a função
console.log(maiorGasto(10, 5, 200, 15, 20, 10, 20));
// Saída: { maiorValor: 20, quantidade: 3 }
/* Explicação:
Math.max(...gastos) → Obtém o maior valor do array.

gastos.filter(valor => valor === maiorValor).length → Filtra os elementos iguais ao maior valor e conta quantos existem.

Retorna um objeto contendo maiorValor e quantidade */