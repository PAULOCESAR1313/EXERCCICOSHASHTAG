/* Crie uma função que seceba um número inteiro, e retorne um booleano indicando se é um número primo.
Função: ehPrimo();
Entrada: 
ehPrimo(4);
ehPrimo(7);
Saída: 
false
true */

function ehPrimo(numero) {
    if (numero < 2) return false; // Números menores que 2 não são primos

    for (let i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i === 0) return false; // Se for divisível por algum número além de 1 e ele mesmo, não é primo
    }

    return true;
}

// Testando a função
console.log(ehPrimo(7));  // true
console.log(ehPrimo(10)); // false
console.log(ehPrimo(17)); // true

/* Explicação:
Números menores que 2 não são primos.

Percorremos os números de 2 até Math.sqrt(numero) para verificar se há algum divisor. Se encontrarmos, o número não é primo.

Se não houver divisores, retornamos true. */