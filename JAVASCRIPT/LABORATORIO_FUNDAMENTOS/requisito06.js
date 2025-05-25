/* Crie uma função que receba o número de vitorias e de empates de um time e retorne o total de pontos desse time, sabendo que as vitorias valem 3 pontos e os empates valem 1 ponto.
Função: calcularPontos();
Entrada: calcularPontos(5, 2);
Saída: 17*/

function calcularPontos(vitoria, empate)
{
let totalPontos = pontoV * vitoria + pontoE * empate;
return totalPontos;
};

const pontoV = 3;
const pontoE = 1;
let time = "Flamengo";


console.log(`O time do ${time} tem o total de ${calcularPontos(5, 2)} pontos`);
