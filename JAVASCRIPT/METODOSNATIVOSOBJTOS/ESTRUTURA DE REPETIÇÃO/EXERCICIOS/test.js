let nome = "Paulo César";
let endSaida = "Av. da Lua";
let endParada = "Av. Getulio Vargas";

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

registrarCorrida(endSaida, endParada);