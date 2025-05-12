//DATE

const dataAtual = new Date(); //Criamos uma instancia.

//console.log(dataAtual.getFullYear());// Ano atual
//console.log(dataAtual.getMonth());//Mês atual - Os meses segue o indice, de 0 a 11. (0 é Janeiro e 11 é Desembro)
//console.log(dataAtual.getDate());//Dia atual.
//console.log(dataAtual.getHours());//Hora atual.
//console.log(dataAtual.getMinutes());//Minutos atuais.
//console.log(dataAtual.getSeconds());//Segundos atuais.

let timestamp = dataAtual.getTime();
//console.log(dataAtual);
//console.log(timestamp);
//timesteamp - representação numerica da data referencia 1 de Janeiro de 1970.

let agora = new Date("2025-05-12");
console.log(`Hoje é: ${agora.getDate() + 1} / ${agora.getMonth() + 1} / ${agora.getFullYear()}`);