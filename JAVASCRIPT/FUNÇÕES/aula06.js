//Conseito de escopo - O escopo define se as variaveis conseguem ser vistas e executadas, e existe três tipos de escopos, são eles - ESCOPO GLOBAL, ESCOPO LOCAL (FUNÇÃO) E ESCOPO DE BLOCO.
//EXEMPLO: ESCOPO GLOBAL

let global = "Sou do escopo global";

function mensagem()
{
    console.log(global);
}; //Essa função não precisa referencia os parâmetros, pos esta usando uma variavel de escopo global.

mensagem();
//Obs: A variavel pode ser visualizado mesmo estando fora de uma função por esta no escopo global.

console.log(global);

//Função local

function mensagem()
{
    let local = ("sou do escopo local");
    console.log(local);
};

mensagem();

//ESCOPO DE BLOCO - Não é uma função, são blocos de instrução. Exemplo: if

if (true)
    {
        let bloco = "Sou do escopo de Bloco do if";
        console.log(bloco);
    };