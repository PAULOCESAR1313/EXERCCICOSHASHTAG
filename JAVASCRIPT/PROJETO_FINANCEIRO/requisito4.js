/*  REQUISITO - 04 => Geração de relatorio financeiro
Crie uma função que gere um relatório financeiro com base no infestimento inicial, taxa de rendimento, duração do investimento, meta de investimento e meta de orçamento
O relatório deve incluir:
O mês atual;
O saldo final do investimento
O total do custo de vida;
Uma mensagem de economia ou exedente em relação o Orçamento;
Uma verificação se a meta de investimento foi atingida;
Um resumo das despesas e dividas por categoria
Função: gerarRelatorio(); */

/* Aqui está a função gerarRelatorio(), que integra os requisitos mencionados para gerar um relatório financeiro completo: */

/* Função do requisito - 01 */

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

let invesInicial = 8000;
const taxaMes = 1.5;
let qMeses = 12;

// Testando a função
calcularInvestimentos(invesInicial, taxaMes, qMeses);

/* Função do requisito - 02 */

function calculoCustoVida(custoDeVida) {
    const despesas = custoDeVida.despesas;
    const contas = custoDeVida.contas;

    const totalDespesas = Object.values(despesas).reduce((total, valor) => total + valor, 0);
    const totalContas = Object.values(contas).reduce((total, valor) => total + valor, 0);

    return {
        totalDespesas: totalDespesas.toFixed(2),
        totalContas: totalContas.toFixed(2),
        custoTotal: (totalDespesas + totalContas).toFixed(2)
    };
}

// Testando a função
const custoDeVida = {
    despesas: {
        Aluguel: 450,
        Luz: 120,  // Valor definido pelo usuário
        Agua: 100, // Valor definido pelo usuário
        Gas: 150,
        Internet: 100,
        Alimentacao: 200
    },
    contas: {
        ParcelaArmario: 250,
        ParcelaPasseio: 225,
        ParcelaImprestimo: 150,
        ParcelaFac: 600
    }
};

calculoCustoVida(custoDeVida);

/* Função do requisito - 03 */

function obterMesAtual() {
    const meses = [
        "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
        "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
    ];
    
    const mesAtual = new Date().getMonth(); // Obtém o índice do mês atual (0 a 11)
    return meses[mesAtual]; // Retorna o nome do mês correspondente
}

// Testando a função
obterMesAtual();

function gerarRelatorio(valorInicial, taxaMensal, meses, metaInvestimento, metaOrcamento, custoDeVida) {
    const investimento = calcularInvestimentos(valorInicial, taxaMensal, meses);
    const custo = calculoCustoVida(custoDeVida);
    const mesAtual = obterMesAtual();
    
    const saldoFinal = parseFloat(investimento.valorCorrigido);
    const custoTotal = parseFloat(custo.custoTotal);
    
    let mensagemEconomia;
    if (saldoFinal >= metaOrcamento) {
        mensagemEconomia = `Você tem um excedente de ${(saldoFinal - metaOrcamento).toFixed(2)} em relação ao orçamento.`;
    } else {
        mensagemEconomia = `Você precisa economizar mais ${(metaOrcamento - saldoFinal).toFixed(2)} para atingir seu orçamento desejado.`;
    }

    const metaInvestimentoAtingida = saldoFinal >= metaInvestimento 
        ? "Meta de investimento atingida!" 
        : "Ainda não atingiu a meta de investimento.";

    return {
        mesAtual,
        saldoFinal: saldoFinal.toFixed(2),
        custoTotal: custoTotal.toFixed(2),
        mensagemEconomia,
        metaInvestimentoAtingida,
        resumoDespesasDividas: custoDeVida
    };
}

// Testando a função
const metaInvestimento = 7000;
const metaOrcamento = 2500;

console.log("(---------- RELATÓRIO ----------)")
console.log(gerarRelatorio(invesInicial, taxaMes, qMeses, metaInvestimento, metaOrcamento, custoDeVida));

/* Essa função combina todas as informações e gera um relatório financeiro detalhado. */