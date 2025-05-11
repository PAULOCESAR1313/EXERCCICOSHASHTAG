/*let flutuanteString = "32.7869";
let inteiroString = "42";

console.log(typeof flutuanteString);

//Método que transforma string em núero.

console.log(Number.parseFloat(flutuanteString));
console.log(Number.parseFloat(inteiroString));

//Usando o typeof para confirmar a mudança.

console.log(typeof Number.parseFloat(flutuanteString));
console.log(typeof Number.parseFloat(inteiroString));

//Converte uma string em um número de ponto flutuante que possui, de forma opicional, um parâmetro que é uma base numerica.

let numero = 50;// Número de base 10. Ele é um número decimal.
// Podemos usar número de diversar bases, como a base 2 que é o número binario, passando o 2 como parâetro receberemos o valor do número em binario.

console.log(numero.toString(2));// O número 2 como parâmetro recebemos o seu valor em binario.
console.log(numero.toString(8));// O número 8 como parâmetro recebemos o seu valor em octal.

console.log(numero);// Mostro o conteúdo da variavel numero
console.log(typeof numero);// Mostra o tipo de dado, que é um Number.
console.log(numero.toString());// Transforma o tipo de dado que era Number para String.
console.log(typeof numero.toString());// Mostra que houve uma mudança.*/

// Método que converte uma string em um número inteiro que possui, de forma opicional, um parâmetro que é uma base numerica.

let flutuanteString = "32.7869";
let inteiroString = "42";

console.log(Number.parseInt(flutuanteString));//Obs: Em quanto o parseFlolt converte as Strings tanto em números de ponto flutuante quanto em inteiros o parseInt, não faz o mesmo. Ele desconsidera tudo que tiver apos o ponto.

console.log(Number.parseInt(inteiroString, 8));

console.log(Number.parseFloat(flutuanteString).toFixed(2));//Usando a união de dois métodos, parseFloat e o toFixed, eu consigo diminuir o número de casas de pois do ponto, neste exemplo estamo diminuindo para apenas duas casas.