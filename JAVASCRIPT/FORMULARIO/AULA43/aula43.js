function validarForulario()
{
    //Obter o valor do campo de texto.
    const campoTexto = document.getElementById("campoTexto");
    let valorCampo = campoTexto.value;

    //Verificar se o campo está vazio
    if(valorCampo === ""){
        alert("Por favor, digite seu nome!");
    }else if(valorCampo ==! ""){
        alert(`Seja bem vindo ${valorCampo}`);
    }
};
validarForulario();