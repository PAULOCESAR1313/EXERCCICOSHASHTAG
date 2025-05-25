/* Crie uma função que receba um array de números e retorne a media desses números
Função: calcularMedia();
Entrada: calcularMedia([10, 20, 30, 40]);
Saída: 25 */

function calcularMedia(numeros) {
    const soma = numeros.reduce((acumulador, valor) => acumulador + valor, 0);
    return soma / numeros.length;
}

// Testando a função
console.log(calcularMedia([10, 20, 30, 40])); // Saída: 25

/* Explicação:
reduce() → Soma todos os elementos do array.

soma / numeros.length → Divide a soma pelo número total de elementos para obter a média. */
