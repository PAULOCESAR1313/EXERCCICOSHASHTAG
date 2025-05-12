//EXERCICIO - 03
//Você deve criar uma função que gera três tipos de números aleatorios: Um deles, entre 0 e 1, outro entre 0 e 100, e o ultimo deve ser um número inteiro aleatorio entre dois valores especificos. Exiba os no console. Ultilize 50 e 100.

/*
Aqui está o que acontece:
- Math.random() gera um número decimal entre 0 e 1.
- Math.random() * 100 gera um número decimal entre 0 e 100.
- Math.floor(Math.random() * (100 - 50 + 1)) + 50 gera um número inteiro aleatório entre 50 e 100.
Se precisar de alguma alteração ou explicação extra, é só avisar!
*/

console.log("( ---------- RESULTADO DA QUESTÃO - 03 ---------- )");

function gerarNumerosAleatorios() {
    let numeroEntre0e1 = Math.random();
    let numeroEntre0e100 = Math.random() * 100;
    let numeroInteiroEntre50e100 = Math.floor(Math.random() * (100 - 50 + 1)) + 50;

    console.log(`Número aleatório entre 0 e 1: ${numeroEntre0e1}`);
    console.log(`Número aleatório entre 0 e 100: ${numeroEntre0e100}`);
    console.log(`Número inteiro aleatório entre 50 e 100: ${numeroInteiroEntre50e100}`);
}

// Testando a função
gerarNumerosAleatorios();

//EXERCICIO -04
//Crie uma função que receba duas datas e calcule a diferença entre elas em dias. Exiba o resultado no console.

/*
A função:
- Converte as datas para objetos Date.
- Calcula a diferença em milissegundos.
- Converte esse valor para dias usando Math.ceil() para garantir que qualquer fração de dia seja arredondada para cima.
- Exibe o resultado no console.
Se precisar de ajustes ou explicações extras, só avisar!
*/

console.log("( ---------- RESULTADO DA QUESTÃO - 04 ---------- )");

function calcularDiferencaDias(data1, data2) {
    // Converter as datas para objetos Date
    let primeiraData = new Date(data1);
    let segundaData = new Date(data2);

    // Calcular a diferença em milissegundos
    let diferencaEmMilissegundos = Math.abs(segundaData - primeiraData);

    // Converter milissegundos para dias
    let diferencaEmDias = Math.ceil(diferencaEmMilissegundos / (1000 * 60 * 60 * 24));

    console.log(`A diferença entre as datas é de ${diferencaEmDias} dias.`);
}

// Testando a função
calcularDiferencaDias("2025-05-01", "2025-05-12");