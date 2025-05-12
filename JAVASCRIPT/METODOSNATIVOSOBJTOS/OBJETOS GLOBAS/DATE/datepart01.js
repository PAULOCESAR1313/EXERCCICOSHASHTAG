//OBJETO GLOBAL - DATE
//Classe vs Instancia

class Carro 
{
    Marca = "Toyota";
    Modelo = "Corolla";
    Ano = 2024;

    ligar ()
    {
        console.log("Carro ligado");
    }

    desligar ()
    {
        console.log("Carro desligado");
    }

    exibirInformacoes ()
    {
        `O carro é no modelo: ${Carro.Modelo} da marca ${Carro.Marca}, e do ano de ${Carro.Ano}`
    }
};

//Classe

const classeCarro = new Carro(); //Para usar a classe, e acessar suas propriedades eu preciso criar um superObjeto, ou seja, Instancia a classe.
//console.log(classeCarro.Modelo);

//objeto simples

const carro =
{
    marca: "Toyota",
    modelo: "Corolla",
    ano: 2024,
};

//console.log(carro);
//console.log(carro.modelo);

//OBJETO GLOBAL DATE
console.log(Math);
console.log(Date);// Date é uma classe do Javascript, mas ela funciona como umm Objeto global, por que nós temos que instanciar para poder usar.
console.log(new Date);

const dataAtual = new Date; //Criando ou seja Instanciando o Objeto / Classe DATE.
console.log(dataAtual);
