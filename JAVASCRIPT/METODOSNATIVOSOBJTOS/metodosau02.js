const produtos = 
{
    nome: "Laptop",
    preco: 2500,
    disponibilidade: true,
};

//Esse método cria uma copia, do objeto e coloca uma nova chave e valor no objeto.
//Object.assign();
//Atribuindo uma nova propriedade.
//Object.assign(produtos, {emEstoque: 10, categoria: "eletrônico"});
//Mostrando no console.log.
//console.log(Object.assign(produtos, {emEstoque: 10}));
//Mostrando no console.log de uma forma mais simples.
//console.log(produtos);
//Esse método altera as propriedades e valores do objeto.
//Object.defineProperty();
//Modificando o valor de uma propriedade.
//Object.defineProperty(produtos, "disponibilidade",{value: false});//Obs: devemos representar o nome da propriedade como uma string, dentro de aspas.

const pessoa = 
{
    nome: "Paulo César",
    idade: 48,
};

const trabalho = 
{
    profissao: "Engenheiro de Softwere",
    cidade: "Lisboa",
};

const funcionario = {};

//Esse método cria uma copia, do objeto e coloca uma nova chave e valor no objeto.
//Object.assign();

//Mostrando no terminal o resultado.
console.log("( ----- Mostrando o objeto Pessoa no terminal ----- )");
console.log(pessoa);
//Mostrando no terminal o resultado.
console.log("( ----- Mostrando o objeto Trabalho no terminal ----- )");
console.log(trabalho);
//Copiando o objeto, e colocando em um novo objeto.
Object.assign(funcionario, pessoa, trabalho);//O primeiro parâmetro é o local, onde você vai colar o que for copiado, o segundo e de onde você vai copiar. Obs: Podemos copiar de diversos lugares ao mesmo tempo.
console.log("( ----- Mostrando o objeto Funcionario no terminal ----- )");
console.log(funcionario);
//Esse método altera as propriedades e valores do objeto.
//Object.defineProperty();
//Acrescentando uma nova propriedade.
console.log("( ----- Mostrando o objeto Funcionario no terminal com uma nova propriedade ----- )");
Object.defineProperty
(
    funcionario, "salario",
    {
        value: 7000,
        enumerable: true,
        writable: true,
        configurable: true,
    }
);
console.log(funcionario);
//Apagando propriedade usando o método delete.
console.log("( ----- Deletando uma propriedade do objeto Funcionario ----- )");
delete funcionario.salario;
console.log(funcionario);