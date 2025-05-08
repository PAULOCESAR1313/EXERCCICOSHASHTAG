/*EXERCICIO - 01
Crie um objeto chamado VENDA, com as propriedades - PRODUTO, QUANTIDADE, PRECOUNITARIO e DESCONTO. Adicione um Método chamado CALCULARTOTAL que calcule o valor total da venda, cansiderando o desconto. Adicione também um método chamado DETALHARVENDA que retorne uma Strig detalhando a venda.*/ 
const venda = 
{
    produto: "Notebook",
    Quantidade: 3,
    precoUnitario: 3000,
    desconto: 0,

    valorCompra: function ()
    {
        const totalCompra = this.Quantidade * this.precoUnitario;
        return totalCompra;
    },

    calcularTotal: function ()
    {
        const total = this.Quantidade * this.precoUnitario;
        return total - (total * (this.desconto / 100));
    },

    detalharVenda: function ()
    {
        return `PRODUTO: ${this.produto}, QUANTIDADE: ${this.Quantidade} PREÇO UNITARIO: ${this.precoUnitario} VALOR DA COMPRA: ${this.valorCompra()} TOTAL PAGO: ${this.calcularTotal()}`;
    }
};

//console.log(venda.detalharVenda());

/*EXERCICIO - 2
Adicione um método ao objeto venda chamado APLICARDESCONTO que recebe um valor percentual atualizado que é o desconto da venda. Aplique um desconto de 10% e verifique o valor total com o método calcularTotal.*/

venda.aplicarDesconto = function (percentual)
{
    this.desconto = percentual;
}

venda.aplicarDesconto(10);
//console.log(`Seu desconto foi: ${venda.desconto}% A sua compra: ${venda.detalharVenda()}`);

/*EXERCICIO - 3
Adicione um método ao objeto venda chamado ATUALIZARQUANTIDADE que recebe um núumero e altere a quantidade do produto no objeto venda. Atualize a quantidade e verifique o total da venda atualizado*/

venda.atualizarQantidade = function (novaQuantidade)
{
    this.Quantidade = novaQuantidade;
}

venda.atualizarQantidade(4);
venda.aplicarDesconto(20);
console.log(`Seu desconto foi: ${venda.desconto}% A sua compra: ${venda.detalharVenda()}`);

/*EXERCICIO - 4
Adicione um método chamado VERIFICARESTOQUE que recebe a quantidade disponivel em estoque e recebe uma menssagem fixa indicando se a venda pode ser realizada ou se é necessário ajusta a quantidade*/

venda.verificarEstoque = function (emEstoque)
{
    return `Verificação concluida: ${this.Quantidade <= emEstoque}`;
}

//console.log(venda.verificarEstoque(0));

console.log(venda);
