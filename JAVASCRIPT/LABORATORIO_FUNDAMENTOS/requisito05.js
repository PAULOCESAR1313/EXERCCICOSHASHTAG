/*Crie uma função que receba uma frase como parametro e retorne um array contendo as palavras que compõe essa frase, separados por um espaço.
Função: dividirFrase();
Entrada: dividirFrase("Eu estou evoluindo como desenvolvedor")
Saída: ["Eu", "estou", "evoluindo", "como", "desenvolvedor"]*/

function dividirFrase(frase) {
    return frase.split(" ");
}

// Testando a função
console.log(dividirFrase("Eu estou evoluindo como desenvolvedor"));
// Saída: ["Eu", "estou", "evoluindo", "como", "desenvolvedor"]

/*EXPLICANDO*/
/* Essa função usa o método .split(" ") para dividir a string com base nos espaços entre as palavras, criando um array com cada uma delas. */