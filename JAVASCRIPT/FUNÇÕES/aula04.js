//PARAMETROS E ARGUMENTOS

//Estrutura básica de uma função:
//function nomeFuncao(Parâmetro){instrução};
//Chamando uma função:
//nomeFuncao(Argumento);
//Parâmetro e argumento são referente ao mesmo dado, mas usamos o parâmetro na hora de construir a função, e o argumento na hora de chamar a função. Parâmetros são variaveis que criamaos na hora de construir a função, já o Argumento é usado na hora de chamar a função e devemos passar valores especifico.
//Exemplo: 
/*
No caso tudo que está entre parentese e o Parâmetro, o que estiver entre chaves é a instrução, e fora do escopo da função é feito o chamaento da função, que segue colocando o nome da função e entre parenteses é colocado os argumentos.

function somar(a, b) => Parâmetro
{
    let resultado = a + b; => instrução
    return resultado; => instrução
};

console.log(somar(10, 5)); => Argumento 
*/

function somar(a, b)
{
    let resultado = a + b;
    return resultado;
};

console.log(somar(10, 5));
//exemplo 02
let camiseta = 25
let qtd = 100

function calcularPrecoTotal(precoUnitario, quantidadeItens){
    let total = precoUnitario * quantidadeItens;
    return total;
};

console.log(calcularPrecoTotal(camiseta, qtd));