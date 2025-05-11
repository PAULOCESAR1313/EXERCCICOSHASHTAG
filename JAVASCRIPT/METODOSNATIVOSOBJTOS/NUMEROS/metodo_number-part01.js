// Number - valores númericos - inteiros e ponto flutuante.
let inteiro = 42;
let numeroPontoFlutuante = 3.5789;

// 01º Método - Verifica se o número é um inteiro e retorna um Booleano.

Number.isInteger(); //verifica se é um inteiro
console.log(Number.isInteger(inteiro)); // Deve retornar true - verdadeiro
console.log(Number.isInteger(numeroPontoFlutuante)); //Deve retornar false - falso

// 02º Método - Formato o número de ponto flutuante ajustantando a quantidade de casas decimais.

//tofixed(digitos); // Esse método ajusta o número de casas decimais ou digitos, entre os parenteses coloqu aguantidade de casas decimais desejado.
numeroPontoFlutuante.toFixed(2) //forma de aplicar o método, escreva a variavel o método.
//console.log(numeroPontoFlutuante.toFixed(2));
//console.log(numeroPontoFlutuante.toFixed()); // Quando não é passado o parâmetro, ele zera os númeo após o ponto.

// 03º Método - Formata o número com uma precisão exata.

//toPrecision(); // Método que mostro com precisão a quantidade de numero que o número tera.
console.log(numeroPontoFlutuante.toPrecision(4)); // Neste caso o 4 mostro a quantidade de numeral que o número terá.
console.log(inteiro.toPrecision(1));// O número 42 vai ser arredondado, e escrito na forma cientifca como 4e+1.
//Ou seja, 4 vezes 10 elevado a 1. Isso ocorre por que o parâmetro é 1.
console.log(inteiro.toPrecision(2)); // Neste caso o retorno será o número, por que o parâmetro é o 2.
console.log(inteiro.toPrecision(3)); //Neste caso que o parâmetro é o 3, ele vai acrecentar o ponto flutuante e completar com o númro zero.
