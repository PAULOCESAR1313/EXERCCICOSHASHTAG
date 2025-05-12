//OBJETO GLOBAL - MATH
//Math.min() - Retorna o menor valor encontrado dentro de uma lista de números.
let lista = Math.min(100, 300, 1, 1000, 7);
let list = [13, 24, 35, 100];

console.log(lista);
console.log(Math.min(...list));
console.log(Math.min(45, 55, 68, 2, 100, 123));//Devemos passar a lista dessa forma para que o Método funcione.
console.log(Math.min([45, 55, 68, 2, 100, 123]));//Dessa forma acontece um erro, o Método não consegue ler os valores. E retorna NaN.

//Math.max() - Retorna o valor maximo encontrado dentro de uma lista de números.
let lista2 = Math.max(100, 300, 1, 1000, 7);
let list2 = [13, 24, 35, 100];

console.log(lista2);
console.log(Math.max(...list));
console.log(Math.max(45, 55, 68, 2, 100, 123));//Devemos passar a lista dessa forma para que o Método funcione.
console.log(Math.max([45, 55, 68, 2, 100, 123]));//Dessa forma acontece um erro, o Método não consegue ler os valores. 