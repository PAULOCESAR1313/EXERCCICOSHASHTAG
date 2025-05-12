//EXERCICIO - 03
//Arredonde valores financeiros - Você tem valores financeiros com varias casas decimais, e deseja exibi-los com apens duas casas decimais.

const valorFinanceiro = 1234.56789;
const valorFormatado = valorFinanceiro.toFixed(2);

console.log(`O valor sem foratação: ${valorFinanceiro} valor formatado: ${valorFormatado}`);

//EXERCICIO - 04
//Ajuste a precisão de um número - Você tem um número muito grande e precisa exibi-lo com uma precisão especifica.

const valorGrande = 12345.6789;
const valorPreciso = valorGrande.toPrecision(5);

console.log(`O valor grande: ${valorGrande}, o valor preciso: ${valorPreciso}`);