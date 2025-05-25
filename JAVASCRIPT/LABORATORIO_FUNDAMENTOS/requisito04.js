/*Crie uma função que receba um valor investido e uma taxa de juros, mais o tempo de investimento e o usuario possa escolher entre juros simples e composto, e retorne o rendimento.
função: calcularRendimentos();
Entrada:
calcularRendimentos(1000, 1.5, 12);
*/
function calcularRendimentos(valorInicial, taxaJuros, tempo, tipoJuros = "simples") {
    taxaJuros = taxaJuros / 100; // Convertendo a taxa para decimal

    let resultado;
    
    if (tipoJuros === "simples") {
        resultado = valorInicial + (valorInicial * taxaJuros * tempo);
    } else if (tipoJuros === "composto") {
        resultado = valorInicial * Math.pow((1 + taxaJuros), tempo);
    } else {
        return "Tipo de juros inválido. Escolha 'simples' ou 'composto'.";
    }
    
    return resultado.toFixed(2); // Arredondando para duas casas decimais
}

// Testando a função
console.log(calcularRendimentos(1000, 1.5, 12, "simples")); // Retorna "1180.00"
console.log(calcularRendimentos(1000, 1.5, 12, "composto")); // Retorna "1195.62"

/* EXPLICAÇÃO
Juros Simples: Fórmula → Valor Final = Valor Inicial + (Valor Inicial * Taxa * Tempo).

Juros Compostos: Fórmula → Valor Final = Valor Inicial * (1 + Taxa) ^ Tempo.

O usuário pode escolher "simples" ou "composto" como tipo de juros. Se não for informado, o padrão será "simples".

Aqui está a função ajustada para arredondar os valores para no máximo duas casas decimais usando .toFixed(2)
Agora os valores são sempre exibidos com no máximo duas casas decimais. Se precisar de mais alguma melhoria, estou por aqui! */

