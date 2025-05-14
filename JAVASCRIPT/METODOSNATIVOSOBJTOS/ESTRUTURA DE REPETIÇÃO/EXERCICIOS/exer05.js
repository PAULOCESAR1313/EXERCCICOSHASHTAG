//Do While Exemplo pratico
let reproduzido = true;
let entrada = 2;

function reproduzirFilme()
{
    console.log("Apertou o play")
};

function pausarFilme()
{
    console.log("Filme pausado")
};

function sairFilme()
{
    console.log("Saindo do filme")
};

function opcoesConficuracao(entrada)
{
    do
    {
        console.log("Opções de Cofigurações: 1 - Pausar e 2 - Saír do Filme");
        console.log(`Opção: ${entrada}`);

        if(entrada === 1)
        {
            pausarFilme();
            reproduzido = false;
        } else if (entrada === 2)
        {
            sairFilme();
            reproduzido = false;
        } else 
        {
            console.log("Opção invalida! Por gentileza, escolha uma opção valida: 1 - Pausar e 2 - Saír do Filme")
        }
        break;
    } while(reproduzido);
};

//Simular:

reproduzirFilme();
opcoesConficuracao(entrada);