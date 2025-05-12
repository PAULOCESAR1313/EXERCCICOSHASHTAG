//EXERCICIO - 05
//Verifique se a entrada é um número válido - Você recebe uma entrada de um usuário e precisa garantir que seja um número válido antes de fazer qualquer operação.

const entrada = "123abc";
const entradaValida = "123";

//NaN - isNaN (true ou false)

const entradaConvertida = Number(entrada);// Convertendo para o tipo Number
const entradaValidaConvertida = Number(entradaValida);//Convertendo para o tipo Number
//console.log(entradaConvertida);
//console.log(entradaValidaConvertida);

console.log(`${Number.isNaN(entradaConvertida)} Entrada inválida`);//Verificando se é NaN, se retornar True então é NaN por tando a entrada é invalida.
console.log(`${Number.isNaN(entradaValidaConvertida)} Entrada válida`);//Verificando se é NaN, se retornar False então não é NaN por tando a entrada é válida.

//EXERCICIO - 06
//Verifique se o número é inito - Você quer garantir que um número não seja infinity ou NaN ante de usá-los em um calculo.

const numero = 1 / 0;
const notNumber = NaN;
const string = "abc";

console.log(numero);
console.log(notNumber);
console.log(string);

console.log(Number.isFinite(numero));// Checa se o valor é um número finito, se retornar False quer dizer que é infinity ou NaN.
console.log(`Esse valor é um núero finito ? ${Number.isFinite(numero)}, portanto ele é: ${numero}`);

console.log(Number.isFinite(notNumber));// Checa se o valor é um número finito, se retornar False quer dizer que é infinity ou NaN.
console.log(`Esse valor é um núero finito ? ${Number.isFinite(notNumber)}, portanto ele é: ${notNumber}`);

console.log(Number.isFinite(string));// Checa se o valor é um número finito, se retornar False quer dizer que é infinity ou NaN.
console.log(`Esse valor é um núero finito ? ${Number.isFinite(string)}, portanto ele é: ${string}`);