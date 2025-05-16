//RECURSIVIDADE - Exemplo pratico - Objeto.

//Objeto simples.
const carro = 
{
    marca: "Tyota",
    modelo: "Corolla",
    ano: 2025,
    peças: 
    {
        portas: 4,
        pneus: "Sistema ABS",
        airbeg: true,
    }
};

//Função recursiva para imprimir propriedades de u Objeto simples.

function imprimirObjeto(objeto)
{
    //Abaixo o código para obter as chaves do objeto.
    const keys = Object.keys(objeto); //Essse método vai retornar uma lista - [marca, modelo, ano]

    //CASO BASE - Serva para parar a função recursiva. Ele vai verificar se a lista está vazia [], se tiver ele para. vamos usar o bloco condicional if.
    if(keys.length === 0)
    {
        return; //Neste caso como o retorno esta vazio, a função vai para. No caso dela não esta vazia, vai começa a interação.
    };

    //Interação sobre as chaves do objeto.
    for(let i = 0; i < keys.length; i++)
    {
        const key = keys[i]; //Essa variavel armazena a chave de cada interações. Pega as propriedades
        const value = objeto[key]; //Essa variavel armazena o valor de cada propriedade, ou chave do objeto.

        //Precisamos verificar se o valor é uma objeto.
        if(typeof value === 'object')
        {
            //Se for um objeto, chamara a função recursivamente.
            imprimirObjeto(value);
        }else 
        {
            //Se ele não for um objeto, vai imprimir o seu valor.
            console.log(`${key}: ${value}`);
        }
    }

};

//Chamanso a função.
imprimirObjeto(carro);