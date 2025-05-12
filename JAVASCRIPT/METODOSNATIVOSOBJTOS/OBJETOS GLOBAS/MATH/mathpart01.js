//OBJETOS GLOBAS:
/*
Number;
Object;
String;
Array;
Boolean.
Todos esses objetos globas estão ligados aos tipos primitivos.
Utilizando qualquer um desses seguido de um ponto, podemos acessar os Métodos nativos do Javascript
*/

// MATH E DATE - Não estão ligados a nem um tipo primitivo.
/*
Math - É responsavel por operações matematicas
Date - É responsavel por manipular e criar datas
*/
//Ultilizando o número PI - O objeto global Mathe tem uma propriedade chamada PI que armazena o número PI.

const PI = Math.PI //OBS: Não é nescessario usar os parenteses, porque ele não precisa de um arguento.

//console.log(PI);

//Encontrndo a raíz quadrada de um número

const raizQuadrada = Math.sqrt(16);

//console.log(raizQuadrada);

//Criando potências com Math

const potencia = Math.pow(2, 4); //Neste caso precisamos de dois argumentos, o primeiro vai ser a base, o segundo o expoente - (2, 4).

//console.log(potencia);

const funcPotencia = function potenciaf (base, expoente)
{
    let calcP = base ** expoente;
    return calcP;
    
};

console.log(funcPotencia(2, 5));

