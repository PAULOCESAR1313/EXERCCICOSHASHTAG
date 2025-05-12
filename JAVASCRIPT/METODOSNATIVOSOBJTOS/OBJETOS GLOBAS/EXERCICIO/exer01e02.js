//EXERCICIO - 01
//Você precisa criar uma função que receba um número decimal e o arredonde de três formas diferente: Para baixo, para cima e para o inteiro mais proximo. Mostre cada arredondamento no console.

console.log("( ---------- RESULTADO DA QUESTÃO - 01 ---------- )");

function arredondarNumero(numero) {
    let arredondadoBaixo = Math.floor(numero);
    let arredondadoCima = Math.ceil(numero);
    let arredondadoProximo = Math.round(numero);

    console.log(`Original: ${numero}`);
    console.log(`Arredondado para baixo: ${arredondadoBaixo}`);
    console.log(`Arredondado para cima: ${arredondadoCima}`);
    console.log(`Arredondado para o inteiro mais próximo: ${arredondadoProximo}`);
}

// Testando a função
arredondarNumero(7.89);

//EXERCICIO - 02
//Crie uma função que receba uma lista de números e retorne o valor maximo e o valor minimo dessa lista.

console.log("( ---------- RESULTADO DA QUESTÃO - 02 ---------- )");

function encontrarMinMax(lista) {
    let valorMinimo = Math.min(...lista);
    let valorMaximo = Math.max(...lista);

    return {
        minimo: valorMinimo,
        maximo: valorMaximo
    };
}

// Testando a função
let numeros = [5, 12, 3, 99, 45, 7];
let resultado = encontrarMinMax(numeros);
console.log(`Valor mínimo: ${resultado.minimo}`);
console.log(`Valor máximo: ${resultado.maximo}`);