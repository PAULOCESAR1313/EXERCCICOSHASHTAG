/* Crie uma função que receba duas distancias (distancia1 e distancia2), e retorne qual pessoa, (pessoa1 e pessoa2), esta mais proxima, se ambas estiverem a mesma distancia, mostre que as duas estão proximas.
Função: calcularDistancia();
Entrada: calcularDistancia(10, 15);
Saída: 
"pessoa1"
"pessoa2"
"Ambas estão proximas"  */

function calcularDistancia(distancia1, distancia2) {
    if (distancia1 < distancia2) {
        return "pessoa1";
    } else if (distancia2 < distancia1) {
        return "pessoa2";
    } else {
        return "Ambas estão próximas";
    }
}

// Testando a função
console.log(calcularDistancia(10, 15)); // Saída: "pessoa1"
console.log(calcularDistancia(20, 5));  // Saída: "pessoa2"
console.log(calcularDistancia(12, 12)); // Saída: "Ambas estão próximas"

/* Explicação:
Se distancia1 for menor, pessoa1 está mais próxima.

Se distancia2 for menor, pessoa2 está mais próxima.

Se forem iguais, ambas estão na mesma distância. */