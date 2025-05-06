//Métodos personalizados - Toda fez que criamos um objeto e dentro dele colocamos, um metodo que recebe uma função como propriedade, estamos criando um método personalizado.
//Exemplo:

const calculadora = 
{
    valor1: 0,
    valor2: 0,

    definirValor: function (v1, v2)
    {
        this.valor1 = v1;
        this.valor2 = v2;
        //calculadora.valor1 = v1;
        //calculadora.valor2 = v2;
    },

    adicao: function somar()
    {
        return this.valor1 + this.valor2;
    },
    subtracao: function subitrair()
    {
        return this.valor1 - this.valor2;
    },
    multiplicacao: function multiplicar()
    {
        return this.valor1 * this.valor2;
    },
    divisao: function dividir()
    {
        return this.valor1 / this.valor2;
    },
};

//Exeplo de uso
calculadora.definirValor(10 ,10);
console.log(calculadora.adicao());
console.log(calculadora.subtracao());
console.log(calculadora.multiplicacao());
console.log(calculadora.divisao());
