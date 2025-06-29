document.addEventListener("DOMContentLoaded", function ()
{
    const formulario = document.getElementById("calc-form");
    const nomeInput = document.getElementById("nome");
    const nomeError = document.getElementById("nome-error");

    formulario.addEventListener("submit", function (event)
    {
        event.preventDefault();

        if(!nomeInput.value) {
            nomeError.style.display = "block";
            return;
        }else {
            nomeError.style.display = "none";
        }

        const nome = nomeInput.value;
        const altura = parseFloat(document.getElementById("altura").value);
        const peso = parseFloat(document.getElementById("peso").value);
       
        const imc = peso / (altura * altura);
        const pesoIdeal = 25 * (altura * altura);
        const resultadoElement = document.getElementById("resultado");

        let categoria;

        if(imc < 18.5) {
            categoria = "Abaixo do peso";
            resultadoElement.style.backgroundColor = "#FFFF00"
        } else if(imc < 25) {
            categoria = "Peso normal";
            resultadoElement.style.backgroundColor = "#00FF00"
        } else if(imc < 30) {
            categoria = "Sobre peso";
            resultadoElement.style.backgroundColor = "#FFA500"
        } else {
            categoria = "Obesidade, procure um profissional de nutrição";
            resultadoElement.style.backgroundColor = "#FF0000"
        }

        resultadoElement.innerHTML = 
        `<p>
            Nome: ${nome}
        </p>
        <p>
            Altura: ${altura}
        </p>
        <p>
            Peso: ${peso}
        </p>
        <p>
            Seu IMC: ${imc.toFixed(2)}
        </p>
        <p>
            Sua categoria: ${categoria}
        </p>
        <p>
            Seu peso ideal é: ${pesoIdeal.toFixed(3)} Kg
        </p>`;

        //Atualizando o input resultado.
        document.getElementById("categoria").value = categoria

        let dados = new FormData(formulario);

        for(let [chaves, valores] of dados.entries())
        console.log(`${chaves}: ${valores} `);
    });
});