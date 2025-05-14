//EXERCICO PRATICO WHILE

//Simulador de um aplicativo de corrida - tipo 99

let nome = "Paulo César";
let endSaida = "Av. da Lua";
let endParada = "Av. Getulio Vargas";

function  cadastraCliente (nome)
{
    while(true)
        {
            if(nome === "")
                {
                    console.log("O campo nome está vazio! Por gentileza registre seu nome!");
                    break;
                } else if(typeof nome !== "string")
                    {
                        console.log("Registro invalido! Por gentileza informe sue nome!");
                        break;
                    } else 
                        {
                            console.log(`Seja bem vindo ao nosso aplicativo, senhor(a) ${nome}, para onde vamos?`);
                            break;
                        }
     
        }
};

//Instruções

function registrarCorrida(endSaida, endParada) {
    console.log("Selecione o local de saída e de chegada!");

    if (endSaida === "" || typeof endSaida !== "string") {
        console.log("O local da saída não foi informado! Por gentileza informe o local da saída");
    } else if (endParada === "" || typeof endParada !== "string") {
        console.log("O local de destino não foi informado! Por gentileza informe o local de destino");
    } else {
        console.log("Corrida confirmada!");
        console.log(`Local de saída: ${endSaida}, local de destino: ${endParada}`);
    }
}

cadastraCliente(nome);
registrarCorrida(endSaida, endParada);