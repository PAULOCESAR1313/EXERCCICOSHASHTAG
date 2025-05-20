//EXERCICIO - 003
/*DETERMINE A CATEGORIA DO CLIENTE:
Escreva um programa chamado categoriaCliente, que categorize os clientes com base na sua pontuação de fidelidade, que será entre 0 e 100. Se apontuação do cliente for maior o igual a 85 o cliente será categorizado como "Cliente Premiu". Se o cliente tiver uma pontuação maior ou igual a 50, ele seprá categorizado como "Cliente Regular*. Caso contrario ele será categorizado como "Cliente Comum*/

/*
1️⃣ class Cliente {}
Aqui estamos definindo uma classe chamada Cliente. Em JavaScript, classes são uma forma de criar objetos com propriedades e métodos.

2️⃣ constructor(nome, ponto) {}
O construtor (constructor) é um método especial que é chamado automaticamente quando criamos um novo objeto da classe Cliente. Ele recebe dois parâmetros:
- nome: o nome do cliente.
- ponto: a pontuação do cliente.

3️⃣ this.nome = nome;
O this.nome representa a propriedade nome do objeto que estamos criando.
O sinal = faz com que this.nome receba o valor do parâmetro nome passado na criação do objeto.
4️⃣ this.ponto = ponto;
O mesmo conceito se aplica à propriedade ponto. Quando criamos um objeto Cliente, ele receberá o valor de ponto que foi passado.

5️⃣ this.categoria = this.definirCategoria();
Aqui, chamamos o método definirCategoria(), que foi definido dentro da classe e calcula automaticamente a categoria do cliente com base na pontuação. O resultado dessa função é armazenado na propriedade categoria.
Exemplo prático:
Se chamarmos:
const cliente1 = new Cliente("Ana", 90);
console.log(cliente1);
O resuotado será:
Cliente { nome: 'Ana', ponto: 90, categoria: 'Cliente Premium' }*/
class Cliente {
    constructor(nome, ponto) {
        this.nome = nome;
        this.ponto = ponto;
        this.categoria = this.definirCategoria();
    }

    /*
 O que esse método faz?
O método definirCategoria() é responsável por categorizar os clientes com base na sua pontuação (this.ponto). Dependendo do valor, ele retorna uma categoria específica

definirCategoria() {}

- Esse trecho declara um método dentro da classe Cliente. Esse método pode ser chamado em qualquer instância da classe Cliente.

if (this.ponto >= 85) {
    return "Cliente Premium";
}

- Aqui temos uma estrutura condicional (if).
- Se a pontuação (this.ponto) for maior ou igual a 85, o método retorna a string "Cliente Premium".

else if (this.ponto >= 50) {
    return "Cliente Regular";
}

- Se a condição anterior não for verdadeira, ele verifica se this.ponto é maior ou igual a 50.
- Se for, retorna "Cliente Regular".

else {
    return "Cliente Comum";
}
    
- Se nenhuma das condições anteriores for verdadeira (ou seja, this.ponto é menor que 50), o método retorna "Cliente Comum".

Como ele funciona na prática?
Quando criamos um novo cliente, como por exemplo:

const cliente1 = new Cliente("Ana", 90);
console.log(cliente1.categoria);

Esse cliente cliente1 tem 90 pontos, então o método definirCategoria() retorna "Cliente Premium", e essa categoria é armazenada na propriedade categoria.

Resumo
Esse método simplesmente verifica a pontuação (ponto) do cliente e retorna a categoria correspondente:
- 85 ou mais → "Cliente Premium"
- 50 a 84 → "Cliente Regular"
- Menos de 50 → "Cliente Comum"

*/

    definirCategoria() {
        if (this.ponto >= 85) {
            return "Cliente Premium";
        } else if (this.ponto >= 50) {
            return "Cliente Regular";
        } else {
            return "Cliente Comum";
        }
    }
}

/*
O que esse código faz?
Ele cria uma lista (clientes) que contém vários objetos da classe Cliente, cada um com um nome e uma pontuação.

const clientes = []

- const clientes → Declara uma constante chamada clientes, que armazenará uma lista (array).
- [ → Indica o início de um array, onde serão armazenados os objetos.

new Cliente("Ana", 90),

- new Cliente(...) → Aqui estamos criando um novo objeto da classe Cliente.
- "Ana" → Nome do cliente.
- 90 → Pontuação do cliente.
A mesma lógica se aplica para os outros clientes:

Cada linha cria um novo objeto com nome e pontuação e o adiciona à lista.

new Cliente("Bruno", 75),
new Cliente("Carlos", 40),
new Cliente("Daniela", 50),
new Cliente("Eduardo", 85),
new Cliente("Fernanda", 30)

🎯 Resumo
- Estamos criando um array (clientes) contendo objetos da classe Cliente.
- Cada objeto tem nome e pontuação.
- Como a classe Cliente já tem lógica para calcular a categoria, ao criar os objetos, eles automaticamente terão a categoria definida.
Exemplo:
Se acessarmos o primeiro cliente:

console.log(clientes[0]);

A saída será:

Cliente { nome: 'Ana', ponto: 90, categoria: 'Cliente Premium' }

Isso porque, ao instanciar new Cliente("Ana", 90), o método definirCategoria() já classificou esse cliente
*/

// Lista de clientes
const clientes = [
    new Cliente("Ana", 90),
    new Cliente("Bruno", 75),
    new Cliente("Carlos", 40),
    new Cliente("Daniela", 50),
    new Cliente("Eduardo", 85),
    new Cliente("Fernanda", 30)
];

/*
clientes.forEach(cliente => {}

- clientes → É o array que contém vários objetos da classe Cliente.
- .forEach(...) → É um método de array que percorre cada elemento da lista e executa uma função para cada um deles.
- cliente => {...} → Aqui temos uma função de seta (arrow function), que recebe cada cliente individualmente e executa um bloco de código para ele.

console.log(`Nome: ${cliente.nome}, Pontuação: ${cliente.ponto}, Categoria: ${cliente.categoria}`);

- O código dentro da função usa console.log() para imprimir os detalhes de cada cliente.
- cliente.nome → Pega o nome do cliente.
- cliente.ponto → Pega a pontuação do cliente.
- cliente.categoria → Pega a categoria do cliente (calculada pelo método definirCategoria()).

📌 O que acontece na prática?
Quando forEach percorre o array, ele pega cada cliente e imprime os dados no console.
Exemplo de saída:

Nome: Ana, Pontuação: 90, Categoria: Cliente Premium
Nome: Bruno, Pontuação: 75, Categoria: Cliente Regular
Nome: Carlos, Pontuação: 40, Categoria: Cliente Comum
Nome: Daniela, Pontuação: 50, Categoria: Cliente Regular
Nome: Eduardo, Pontuação: 85, Categoria: Cliente Premium
Nome: Fernanda, Pontuação: 30, Categoria: Cliente Comum

Resumo
- .forEach() percorre cada cliente do array.
- A função de seta pega cada objeto e imprime os dados no console.
- O resultado é um relatório com nome, pontuação e categoria de cada cliente.
*/

// Exibindo resultados no console
//clientes.forEach(cliente => {
    /*console.log(`Nome: ${cliente.nome}, Pontuação: ${cliente.ponto}, Categoria: ${cliente.categoria}`);
});*/




//EXERCICIO - 004
/*Você esta gerenciando uma equipe de vendas, e deseja avaliar o desempenho dos seus vendedores, com base em suas vendas mensais em relação a uma meta estabelecida. Escreva um programa desempenhoIndividualDoVendedor que classifique em categorias de desempenho dos vendedores com base no percentual alcançado em relação a meta.
As categorias: "Exelente desempenho" para os vendedores  que alcançarem ou exederem a meta, "Muito Bom desempenho", para os vendedores  que alcançarem o percentua entre 90% e 99%, "Bom desempenho" para os vendedores  que alcançarem o percentua entre 80% e 89%, "Desempenho Satisfatorio", para os vendedores  que alcançarem o percentua entre 60% e 79%, "Desempenho insatisfatorio" para os vendedores  que alcançarem o percentua abaixo de 60%*/

/*
Aqui está um programa em **JavaScript** que avalia o desempenho dos vendedores com base na meta estabelecida e classifica cada um em categorias:

javascript
*/
class Vendedor {
    constructor(nome, vendas, meta) {
        this.nome = nome;
        this.vendas = vendas;
        this.meta = meta;
        this.desempenho = this.calcularDesempenho();
    }

    calcularDesempenho() {
        const percentual = (this.vendas / this.meta) * 100;

        if (percentual >= 100) {
            return "Excelente desempenho";
        } else if (percentual >= 90) {
            return "Muito Bom desempenho";
        } else if (percentual >= 80) {
            return "Bom desempenho";
        } else if (percentual >= 60) {
            return "Desempenho Satisfatório";
        } else {
            return "Desempenho Insatisfatório";
        }
    }
}

// Criando a lista de vendedores e suas respectivas vendas
const vendedores = [
    new Vendedor("Ana", 10500, 10000),
    new Vendedor("Bruno", 9500, 10000),
    new Vendedor("Carlos", 8500, 10000),
    new Vendedor("Daniela", 7000, 10000),
    new Vendedor("Eduardo", 5000, 10000),
    new Vendedor("Fernanda", 11000, 10000)
];

// Exibindo o desempenho de cada vendedor no console
vendedores.forEach(vendedor => {
    console.log(`Nome: ${vendedor.nome}, Vendas: ${vendedor.vendas}, Meta: ${vendedor.meta}, Categoria: ${vendedor.desempenho}`);
});


/*
### 🔍 **Explicação do código**
1. Criamos a classe `Vendedor` que recebe `nome`, `vendas` e `meta`.
2. O método `calcularDesempenho()` determina a categoria com base no **percentual** de vendas em relação à meta.
3. Criamos um array `vendedores` com exemplos de vendedores e suas vendas.
4. Utilizamos `.forEach()` para percorrer a lista e exibir os resultados no console.

### 🛠 **Saída esperada**
```
Nome: Ana, Vendas: 105, Meta: 100, Categoria: Excelente desempenho
Nome: Bruno, Vendas: 95, Meta: 100, Categoria: Muito Bom desempenho
Nome: Carlos, Vendas: 85, Meta: 100, Categoria: Bom desempenho
Nome: Daniela, Vendas: 70, Meta: 100, Categoria: Desempenho Satisfatório
Nome: Eduardo, Vendas: 50, Meta: 100, Categoria: Desempenho Insatisfatório
Nome: Fernanda, Vendas: 110, Meta: 100, Categoria: Excelente desempenho

Agora você pode testar e modificar conforme necessário! Se precisar de ajustes ou explicações extras, estou aqui para ajudar.*/



