//Objeto global - Math
//Math.round(x) - Arredonda o x para o inteiro mais proximo.
let numero1 = 3.45;
let numero2 = 132.161;

console.log(Math.round(numero1));
console.log(Math.round(numero2));

//Math.random() - Retorna u número pseudo aleatorio entre 0 e 1.
const aleatorio = Math.random().toFixed(2);
const aleatorio2 = Math.random() *100;
const aleatorio3 = parseFloat(Math.random().toFixed(2));
const aleatorio4 = parseFloat((Math.random() * 100).toFixed(2));

console.log(parseFloat(aleatorio));
console.log(parseFloat(aleatorio2.toFixed(2)));
console.log(aleatorio3);
console.log(aleatorio4);