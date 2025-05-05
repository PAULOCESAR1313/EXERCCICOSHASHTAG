const produtos = 
{
    nome: "Laptop",
    preco: 2500,
    disponibilidade: true,
    emEstoque: 10,
};

//Esse método serve para mostrar todas as chaves ou propriedades do nosso objeto.
Object.keys(produtos);//É representado po uma lista de Chaves.
//Exibindo no terminal atraveis do console.log();
console.log("( ----- Mostrando as Chaves(Propriedades) do Objeto ----- )");
console.log(Object.keys(produtos));
//Esse método serve para mostrar todas os valores ou conteúdo das chaves do objeto.
Object.values(produtos);//É representado po uma lista de Valores.
//Exibindo no terminal atraveis do console.log();
console.log("( ----- Mostrando os Valores das Chaves(Propriedades) do Objeto ----- )");
console.log(Object.values(produtos));
//Esse método serve para mostrar todas as chaves ou propriedades, junto com seus valores do nosso objeto.
Object.entries(produtos);//É representado por uma lista de listas com Chaves e valores.
//Exibindo no terminal atraveis do console.log();
console.log("( ----- Mostrando as Chaves(Propriedades) e valores do Objeto ----- )");
console.log(Object.entries(produtos));