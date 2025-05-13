//EXERCICIO - 5
//Crie uma função que receba uma data e extraia o dia, mês e ano dessa data. E exiba o resultado no console.

console.log("( ---------- RESOLUÇÃO - 01 DO EXERCICIO - 05 ---------- )")

function extrairData(dataStr) {
    let [dia, mes, ano] = dataStr.split('/');
    console.log(`Dia: ${dia}`);
    console.log(`Mês: ${mes}`);
    console.log(`Ano: ${ano}`);
}

// Exemplo de uso
let data1 = "13/05/2025";
extrairData(data1);

//Este código usa split('/') para separar a data e exibir os valores no console.

//RESOLUSÃO USANDO O DATE NATIVO DO JAVASCRIPT

console.log("( ---------- RESOLUÇÃO - 02 DO EXERCICIO - 05 ---------- )")

function extrairData(dateString) {
    // Dividir a string e criar um objeto Date
    let [dia, mes, ano] = dateString.split('/').map(Number);
    let data = new Date(ano, mes - 1, dia); // Meses começam do índice 0 em JavaScript

    console.log(`Dia: ${data.getDate()}`);
    console.log(`Mês: ${data.getMonth() + 1}`);
    console.log(`Ano: ${data.getFullYear()}`);
}

// Exemplo de uso
let data = "13/05/2025";
extrairData(data);

/*
Essa função converte a string para números, cria um objeto Date e depois extrai corretamente o dia, mês e ano. Vale lembrar que os meses no JavaScript começam do índice 0 (janeiro é 0, fevereiro é 1, etc.), por isso fazemos mes - 1 ao criar o Date.
*/


//EXERCICIO - 6
//Crie uma função que receba uma data de nascimento de uma pessoa e calcule a idade dela com base na data atual. E exiba o resultado no console.

console.log("( ---------- RESOLUÇÃO DO EXERCICIO - 06 ---------- )")

function calcularIdade(dataNascimentoStr) {
    // Converter a string para um objeto Date
    let [dia, mes, ano] = dataNascimentoStr.split('/').map(Number);
    let dataNascimento = new Date(ano, mes - 1, dia); // Ajuste do mês (começa em 0)

    // Obter a data atual
    let hoje = new Date();

    // Calcular a idade
    let idade = hoje.getFullYear() - dataNascimento.getFullYear();

    // Ajustar se o aniversário ainda não ocorreu no ano atual
    let aniversarioEsteAno = new Date(hoje.getFullYear(), dataNascimento.getMonth(), dataNascimento.getDate());
    if (hoje < aniversarioEsteAno) {
        idade--;
    }

    console.log(`Idade: ${idade}`);
}

// Exemplo de uso
let dataNascimento = "13/02/1977";
calcularIdade(dataNascimento);

/*
Essa função leva em conta a diferença de anos e ajusta a idade caso o aniversário da pessoa ainda não tenha ocorrido no ano atual. Dessa forma, a idade calculada será precisa. Me avise se precisar de ajustes!
*/