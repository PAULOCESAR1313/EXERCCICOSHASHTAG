//NaN (Not A Number) - Mais frequencia de resultado.
let notANumber = NaN;
let notANumber2 = 0 / 0;
let string = Number("Olá, seu mane!");

//console.log(notANumber, notANumber2, string);

//Verifica se o valor passado é um NaN
console.log(Number.isNaN(notANumber));// Se for NaN o retorno é True.
console.log(Number.isNaN(notANumber2));// Se for NaN o retorno é True.
console.log(Number.isNaN(string));// Se for NaN o retorno é True.
console.log(Number.isNaN(58));// Quando não for NaN o retorno é False.
console.log(Number.isNaN(58.76455));// Quando não for NaN o retorno é False.

//Infinity / - Infinity

let infinito = Infinity; // Ou o infinito negativo, - Infinity.
let infinito2 = 1 / 0; // Ou pode ser sua versão negativa, -1 / 0.
let multiplicacao = Number.MAX_VALUE * 2;

//console.log(infinito, infinito2, multiplicacao);