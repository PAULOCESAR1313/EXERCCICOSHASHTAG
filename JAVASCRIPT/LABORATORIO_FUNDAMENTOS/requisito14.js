/* Crie uma função que receba um array de despesas e retorne um novo array contendo "Alto gasto"  para despesas maiores que 100 e "Gasto controlado" para despesas menores que 100.
Função controleDespesas();
entrada: const despesas = [150, 80, 200, 60, 120];
Saída: ["Alto gasto", "Gasto controlado", "Alto gasto", "Gasto controlado", "Alto Gasto"]; */

function controleDespesas(despesas) {
    return despesas.map(valor => valor > 100 ? "Alto gasto" : "Gasto controlado");
}

// Testando a função
const despesas = [150, 80, 200, 60, 120];
console.log(controleDespesas(despesas)); 
// Saída: ["Alto gasto", "Gasto controlado", "Alto gasto", "Gasto controlado", "Alto gasto"]

/* Explicação:
.map() → Percorre o array e aplica a condição em cada item.

Se a despesa for maior que 100, retorna "Alto gasto".

Se for menor ou igual a 100, retorna "Gasto controlado". */