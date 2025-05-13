//DESAFIO
//Crie uma função que receba uma data e formate para o padrão brasileiro.

console.log("( ---------- 01º FORMA DE RESOLVER O DESAFIO ----------)");
console.log("Usando a data atual é convertendo para formato brasileiro");

function formatarData(data) {
    let dia = data.getDate().toString().padStart(2, '0');
    let mes = (data.getMonth() + 1).toString().padStart(2, '0'); // Mês começa do zero
    let ano = data.getFullYear();

    return `${dia}/${mes}/${ano}`;
}

// Exemplo de uso
let dataAtual = new Date();
console.log(`Data no formato Americano: ${dataAtual}`);
console.log(`Data no formato brasileiro: ${formatarData(dataAtual)}`);

/*
Essa função pega um objeto Date, extrai o dia, mês e ano corretamente, adiciona zero à esquerda quando necessário (padStart(2, '0')), e retorna a data formatada no padrão brasileiro.
*/

console.log("( ---------- 02º FORMA DE RESOLVER O DESAFIO ----------)");
console.log("Entrando com a data manualmente é convertendo para formato brasileiro");

function converterDataAmericanaParaBrasileira(dataStr) {
    let [ano, mes, dia] = dataStr.split('-').map(Number);
    let data = new Date(ano, mes - 1, dia); // Ajustando o mês para o índice correto

    let diaFormatado = data.getDate().toString().padStart(2, '0');
    let mesFormatado = (data.getMonth() + 1).toString().padStart(2, '0');
    let anoFormatado = data.getFullYear();

    return `${diaFormatado}/${mesFormatado}/${anoFormatado}`;
}

// Exemplo de uso
let dataAmericana = "2025-12-25";
console.log(`Data inserida manualmente no formato Americano: ${dataAmericana}`);
console.log(`Data convertida para formato brasileiro: ${converterDataAmericanaParaBrasileira(dataAmericana)}`);

/*
Agora você pode inserir a data no formato americano (YYYY-MM-DD), e a função a converterá para o formato brasileiro (DD/MM/AAAA). 
*/