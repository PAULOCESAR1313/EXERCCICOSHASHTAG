/*Crie uma Função que receba um array de nomes e retorne esse array em ordem alfabetica
Entrada: [Leilson, Iara, Maria A, Maria O, Thayanne, Irismar, José, Antonio, Raimundo, Francisco, Sandra, Tatiane, Thaynara, Paulo];
Saída: [Antonio, Francisco, Iara, Irismar, José, Leilson, Maria A, Maria O, Paulo, Raimundo, Sandra, Tatiane, Thayanne, Thaynara]*/

function ordenarNomes(nomes) {
    return nomes.slice().sort();
}

const nomes = ["Leilson", "Iara", "Maria A", "Maria O", "Thayanne", "Irismar", "José", "Antonio", "Raimundo", "Francisco", "Sandra", "Tatiane", "Thaynara", "Paulo"];

const nomesOrdenados = ordenarNomes(nomes);

console.log(nomesOrdenados);

/*EXPLICAÇÃO
Essa função ordenarNomes faz uma cópia do array original usando slice() para evitar modificar o array original e depois usa sort() para ordená-lo alfabeticamente.

Quando executado, o código retornará:

[
  "Antonio", "Francisco", "Iara", "Irismar", "José", "Leilson", 
  "Maria A", "Maria O", "Paulo", "Raimundo", "Sandra", "Tatiane", 
  "Thayanne", "Thaynara"
]
*/