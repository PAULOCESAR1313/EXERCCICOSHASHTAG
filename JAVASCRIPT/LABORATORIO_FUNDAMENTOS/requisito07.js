/* Crie uma função que receba uma frase e retorne o total de vogais na frase.
Função: contarVogais();
Entrada: contarVogais("Olá futuro desenvolvedor!")
Saída: 10 */

function contarVogais(frase) {
    const vogais = "aeiouAEIOUáéíóúÁÉÍÓÚ"; // Inclui vogais com acentos
    let contador = 0;

    for (let char of frase) {
        if (vogais.includes(char)) {
            contador++;
        }
    }

    return contador;
}

// Testando a função
console.log(contarVogais("Olá futuro desenvolvedor!")); // Saída: 10

/* EXPLICAÇÃO:
Como funciona?
Definimos uma string vogais contendo todas as vogais, incluindo acentuadas.

Percorremos a frase com um for...of, verificando se cada caractere está presente na string vogais.

Se for uma vogal, incrementamos o contador.*/