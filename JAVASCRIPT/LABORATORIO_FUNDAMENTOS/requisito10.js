/* Crie uma função que receba uma palavra e retorne um booleano se a palavra é um palindromo.
Função: ehPalitromo();
Entrada:
ehPalitromo("arara");
ehPalitromo("cachoro");
Saída:
true
false */

function ehPalindromo(palavra) {
    const palavraInvertida = palavra.split("").reverse().join("");
    return palavra === palavraInvertida;
}

// Testando a função
console.log(ehPalindromo("Arara"));    // true
console.log(ehPalindromo("cachorro")); // false

/* Explicação:
A função usa .split("") para dividir a palavra em um array de caracteres.

Em seguida, .reverse() inverte os caracteres e .join("") os junta novamente em uma string.

Por fim, compara a palavra original com a invertida para determinar se é um palíndromo */
