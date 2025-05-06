//Objecte.create - Método que cria outro objeto. Obs: Os objetos criados por esse método, não tem uma copia as propriedades o objeto pai, esse só acessa as propriedade. No método assign é feito uma copia das propriedas e é colocado dentro do novo objeto.

const pessoa = 
{
    cidade: "Rio de Janeiro",
    surf: true,
    fala: function ()
    {
        console.log("Olá, seu Mane!")
    }
};

const carro = 
{
    modelo: "Corolla",
    marca: "Toyota",
};

// Objeto criado atraves do metodo Object.create(); esse Objeto herdara as funções e as propriedades do objeto anterior.
const joao = Object.create(pessoa); //Herda as propriedades de um objeto.
joao.fala();//Chamando o objeto joao.
//Usando o método assign
Object.assign(joao, carro); //Copia as propriedades de um objeto.
joao.nome = "João";//Atribuição de propriedade.
joao.idade = 30;//Atribuição de propriedade.

console.log(joao.cidade, joao.surf);
console.log(joao);