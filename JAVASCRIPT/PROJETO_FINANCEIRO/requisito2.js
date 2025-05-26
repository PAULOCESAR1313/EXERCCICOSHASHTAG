/* REQUISITO - 02 => Gerenciamento de Despesas
Crie uma função que receba uma lista de objetos, chamada custoDeVida[], o primeiro objeto é despesas com as seguintes chaves: Aluguel: 450, Luz: valor, Agua: valor, Gas: 150, Internet: 100, o segundo ojeto é contas com as seguintes chaves: ParcelaArmario: 250, ParcelaPasseio: 225, ParcelaImprestimo: 150, ParcelaFac: 600. As chaves Luz e Agua, como são valores variaveis de pendendo do consumo mensal, devem ser atribuido pelo usuario.
A função deve retornar o custo de vida do usuario.
Função: calculoCustoVida(); */

/* Aqui está a função calculoCustoVida em JavaScript, que recebe um objeto custoDeVida, onde o usuário pode definir os valores de Luz e Agua, e retorna o custo total de vida: */

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

console.log(calculoCustoVida(custoDeVida));

/* Explicação:
A função recebe um objeto contendo despesas fixas e variáveis e contas.

Usa Object.values() e .reduce() para somar os valores de despesas e contas separadamente.

Retorna um objeto com total de despesas, total de contas e custo total de vida formatado com duas casas decimais. */

