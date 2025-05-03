//retorno de uma função

// Objeto que armazena um pedido!
let pedido = 
{
    id: 1234,
    nome: "Pedro",
    email: "pedro@exeplo.com",
    lanche: 12,
    valorLanche: 6, 
    batatafrita: 6,
    valorbatataf: 4,
    suco: 4,
    valorsuco: 5,
};

//função que simula pedidos! Obs: essa função não possui um retor, ela só mostro o resultado no console, ela não quarda essa informação para ser reutilidada depois!

function enviarNotificacao(nome, id, email, lanche, batatafrita, suco)
{
    console.log(`Por gentileza, confirme seu e-mail: ${email}!`);
    console.log(`Senhor ${nome}, seu pedido foi aceito!`);
    console.log(`Seu pedido: Nº ${id}. Itens: Lanches ${lanche}, Batatafrita ${batatafrita}, Sucos ${suco}!`);
    
};

//Chamando a função

enviarNotificacao(pedido.nome, pedido.id, pedido.email, pedido.lanche, pedido.batatafrita, pedido.suco);

//Função processarPedido, essa função vai calcular e retornar o valor do total de pedido

function processarPedido(id, item1, item2, item3)
{
    let totalPedido = item1 + item2 + item3;
    console.log(`Pedido: ${id}, Processando!`);
    console.log(`O total do pedido é: ${totalPedido} itens`);
    return totalPedido; //O return marca o final das instruções, todas as instruções devem ficar antes do return para funcionar
};

processarPedido(pedido.id, pedido.lanche, pedido.batatafrita, pedido.suco);

//Função calcularPagamento, essa função vai calcular e retornar o valor do total que deve ser pago

function calcularPag(valor1, valor2, valor3, it1, it2, it3)
{
    let pagamento = ((valor1 * it1) + (valor2 * it2) + (valor3 * it3));
    console.log(`Total a pagar: ${pagamento} reais`);
    return pagamento;
};

calcularPag(pedido.valorLanche, pedido.lanche, pedido.valorbatataf, pedido.batatafrita, pedido.suco, pedido.valorsuco);

//Obs: Nós podemos, armazenar o chamanento da função em uma variavel

let retornoFuncaoCalcularPag = calcularPag //inicio
(
    pedido.valorLanche,
    pedido.lanche,
    pedido.valorbatataf,
    pedido.batatafrita,
    pedido.suco,
    pedido.valorsuco
); // final da variavel que arazena o chamamento função calculrPag,

console.log(retornoFuncaoCalcularPag);//Quando printamos a variavel recebemos como resposta apenas o resultado final.
console.log(retornoFuncaoCalcularPag + retornoFuncaoCalcularPag);