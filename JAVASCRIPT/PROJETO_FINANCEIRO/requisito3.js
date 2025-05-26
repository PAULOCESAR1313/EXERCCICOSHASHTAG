/* REQUISITO - 03 => Obtenção do mês atual
Crie uma função que retorne o nome do mês atual no formato string.
A função deve utilizar um array com os nomes dos meses para identificar o mês atual.
Funão: obterMesAtual(); */

/* Aqui está a função obterMesAtual em JavaScript, que retorna o nome do mês atual com base em um array contendo os nomes dos meses: */

function obterMesAtual() {
    const meses = [
        "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
        "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
    ];
    
    const mesAtual = new Date().getMonth(); // Obtém o índice do mês atual (0 a 11)
    return meses[mesAtual]; // Retorna o nome do mês correspondente
}

// Testando a função
console.log(obterMesAtual()); // Saída: "Maio" (se executado em maio)

/* Explicação:
Criamos um array contendo todos os nomes dos meses.

Utilizamos new Date().getMonth() para obter o índice do mês atual (vai de 0 a 11).

Retornamos o nome do mês correspondente no array */
