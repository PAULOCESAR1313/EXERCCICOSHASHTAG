/* REQUISITO - 01 => Simulação de investimentos
Crie uma função que simule o rendimento de um investimento com base em um valor inicial, uma taxa mensal de rendimento e um periodo de meses.
A função deve receber esses dados do usuario, e retornar o investimento inicial, a taxa de rendimento mensal e periodo de meses e o valor corrigido depois do periodo de meses, o valor corrigido deve ter no maximmo duas casas decimais
Função: calcularInvestimentos(); */

function calcularInvestimentos(valorInicial, taxaMensal, meses) {
    taxaMensal = taxaMensal / 100; // Convertendo a taxa percentual para decimal
    const valorCorrigido = valorInicial * Math.pow((1 + taxaMensal), meses); // Fórmula de juros compostos
    
    return {
        investimentoInicial: valorInicial.toFixed(2),
        taxaMensal: (taxaMensal * 100).toFixed(1) + "%",
        periodoMeses: meses,
        valorCorrigido: valorCorrigido.toFixed(2)
    };
}

let invesInicial = 1000;
const taxaMes = 1.5;
let qMeses = 12;

// Testando a função
console.log(calcularInvestimentos(invesInicial, taxaMes, qMeses));

/* Explicação:
Converte a taxa percentual para decimal para os cálculos.

Utiliza a fórmula de juros compostos: valorInicial * (1 + taxaMensal) ^ meses.

Retorna um objeto com os dados formatados, garantindo que os valores tenham até duas casas decimais. */