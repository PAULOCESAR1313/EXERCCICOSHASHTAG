//AULA 02 OBJETOS

let livro = 
{
    titulo: "Javascript para iniciantes",
    autor: "Paulo César",
    ano: 2025,
    genero: "Programação",
};

//CONSUTANDO PROPRIEDADES EM UM OBJETO
console.log("----- Consutando Propriedades em um objeto ----");
console.log("----- Comando livro.titulo ----");
console.log(livro.titulo);
console.log("----- Comando livro.autor ----");
console.log(livro.autor);
//ACRESCENTANDO PROPRIEDADES
console.log("----- Acrescentadno Propriedades ----");
console.log("----- Comando livro.paginas = 300; ----");
livro.paginas = 300;
console.log("----- Comando livro mostra os itens de um Objeto----");
console.log(livro);
//DELETANDO PROPRIEDADES
console.log("----- Deletando Propriedades ----");
console.log("----- Comando delete livro.paginas ----");
delete livro.paginas;
console.log("----- Comando livro mostra os itens de um Objeto----");
console.log(livro);
console.log("----- Consutando se existe de propriedades dentro de um Objeto----");
console.log("----- Comando in checa se existe uma propriedade em um objto----");
console.log("paginas" in livro);//ESSE COMANDO VAI CHECAR SE A PROPRIEDADE PAGINAS EXISTE NO OBJETO LIVRO.
//O RESULTADO E UM BOOLIANO, TRUE OU FALSE.
console.log("titulo" in livro);