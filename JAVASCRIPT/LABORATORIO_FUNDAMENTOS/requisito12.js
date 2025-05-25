/* Crie uma função que receba uma frase e retorne a quantidade de palavras na frase.
Função: contarPalavras();
Entrada: contarPalavras("Oi, conseguindo resolver tudo?");
Saída: 4 */

function contarPalavras(frase) {
    return frase.trim().split(/\s+/).length;
}

// Testando a função
console.log(contarPalavras("Oi, conseguindo resolver tudo?")); // Saída: 4

/* Explicação:
trim() → Remove espaços extras no início e fim da frase.

split(/\s+/) → Divide a frase em um array de palavras usando regex (\s+), que captura espaços simples e múltiplos espaços.

.length → Conta a quantidade de palavras no array gerado. */