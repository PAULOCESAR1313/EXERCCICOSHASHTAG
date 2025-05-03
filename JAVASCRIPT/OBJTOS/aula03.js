//MANIPULANDO TIPOS DE REFERENCIA
console.log("----- LISTA DE CONTROLE -----");
let listaA = [1, 2, 3];// LISTA DE CONTROLE
console.log(listaA)
//REFERENCIANDO UMA LISTA
console.log("----- REFERENCIANDO DE FORMA ERRADA -----");
let listaB = listaA;//ESTA É A FORMA ERRADA DE SE FAZER REFERENCIA, PORQUE QUANDO FIZERMOS UMA AUTERAÇÃO NA LISTAB A LISTAA SOFRERA AUTERAÇÃO.
listaB[0] = 99;//NESTE CASO TANTO A LISTAB QUANTO A LISTA DE CONTROLE SOFRERAM MUDANÇAS.
console.log("----- AS DUAS LISTAS SE AUTERAM -----");
console.log("----- LISTAB AUTERADA -----");
console.log(listaB);
console.log("----- LISTAA AUTERADA -----");
console.log(listaA);
console.log("----- REFERENCIANDO DE FORMA CORETA -----");
let listaC = [...listaA];//DESTA FORMA É CRIADA UMA COPIA DA LISTA DE CONTROLE, PARA QUE ELA NÃO SE AUTERE.
listaC[0] = 100;//NESTE CASO SÓ A LISTAB VAI SOFRER MUDANÇAS.
console.log("----- LISTAC AUTERADA -----");
console.log(listaC);
console.log("----- LISTA DE CONTROLE NÃO SE AUTERA -----");
console.log(listaA);
//O MESMO PROCESSO PODE SER FEITO COM O OBJETO.