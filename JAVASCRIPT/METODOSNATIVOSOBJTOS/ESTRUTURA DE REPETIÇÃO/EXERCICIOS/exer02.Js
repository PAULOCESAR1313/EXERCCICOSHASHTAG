//WHILE

let numero = 0;

while(numero <= 3)
    {
        console.log(`Número: ${numero}`);
        numero++;
    };

    console.log("Contagem com While finalizada!");

    //Função que registra funcionarios

    function registroFuncionarios ()
    {
        let funcionariosRegistrados = 0;
        while(funcionariosRegistrados < 3)
        {
            console.log(`Nº do funcionarios registrados: ${funcionariosRegistrados + 1}`);
            funcionariosRegistrados++;
        }
        return funcionariosRegistrados;
    };
    console.log("Nº Total de funcionarios registrados é: " + registroFuncionarios());