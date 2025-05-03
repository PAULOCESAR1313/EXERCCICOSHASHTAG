//Função para calcular uma media. Exercicio 01
let avaliacao = 
{
    prova1: 5,
    prova2: 6,
    prova3: 7,
    provaF: 10,
};

function media(n1, n2, n3)
{
    let resultMedia = ((n1 + n2 + n3) / 3);
    console.log(`A média desse aluno é: ${resultMedia}`);
    return resultMedia;
};

media(avaliacao.prova1, avaliacao.prova2, avaliacao.prova3);

//Função para recuperação da media. Exercicio 02

function recuperacao(n4)
{
    let mediaFinal = (((media(avaliacao.prova1, avaliacao.prova2, avaliacao.prova3)) + (avaliacao.provaF)) / 2);
    console.log(`A nota final desse aluno é: ${mediaFinal}`);
    return mediaFinal;
};

recuperacao(avaliacao.prova1, avaliacao.prova2, avaliacao.prova3, avaliacao.provaF);