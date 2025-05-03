//Como se constroi uma função em javascript - As funçõe tem as seguintes caracteristicas:
//Ela começa sempre com a palavra chave ou palavra rezervada, "function", seguido pelo nome da função, que deve sempre ter um nome relacionado com o que a funão faz. Depois vem o parametro, mais isso é opcional. E logo em seguinda dentro da função vem as instruções.
//exemplo: function nomeFuncao(){} - Sintaxe basica.

//função para inicial um cadastro.

function enviarMensage(){
    console.log("Para iniciar seu cadastro digite seu Nome completo!");
};

//enviarMensage();

//função de cadastro de cliente

function cadastro(nome, sobrenome)
{
    console.log(`Olá, ${nome} ${sobrenome}, você foi cadastrado com sucesso!`)
};

//cadastro("Thayanne", "Silva");

//função de operação matematica

function banco(deposito, saque)
{
    let saldo = deposito - saque
    return saldo;
};

//console.log(banco(1000, 300));

//função principal

function main()
{
    enviarMensage();
    cadastro("Thayanne, Silva");
    let saldo = banco(1000, 450);
    console.log(`O saldo atual de sua conta é: ${saldo} reais!!`);
};

main();