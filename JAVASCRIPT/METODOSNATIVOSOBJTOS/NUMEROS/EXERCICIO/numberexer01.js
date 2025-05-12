//EXERCICIO - 01
//Converta valores de texto em números - Imagine que você tem valores em formato de texto, como "150.50", "200px" e precisa converter para o formato de número.

const valor1 = "150.50";
const valor2 = "200px";
const valor3 = "abc";

console.log(Number.parseFloat(valor1));
console.log(Number.parseInt(valor2));// Vai converter o número 200 e despresar o px.
console.log(Number.parseFloat(valor3));//Vai retornar NaN, que não é um numero, mas para o Javascript NaN é do tipo Number.

//EXERCICIO - 02
//Somar valores númericos de uma entrada de formulario - Você recebe dois valores numericos como string. Converta-os e some-os corretamente.

const numero1 = "10";
const numero2 = "20.556";
const somar = Number.parseInt(numero1) + Number.parseFloat(numero2);

Number.parseInt(numero1);
Number.parseFloat(numero2);

console.log(typeof numero1);
console.log(typeof numero2);

console.log(Number.parseInt(numero1));
console.log(Number.parseFloat(numero2));

console.log(typeof Number.parseInt(numero1));
console.log(typeof Number.parseFloat(numero2));

console.log(somar);