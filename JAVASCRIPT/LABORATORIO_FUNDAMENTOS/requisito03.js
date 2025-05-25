/*Crie uma função que receba dois falores e retorne verdadeiro se ambos forem considerados "truthy"
Função compararValores
Entradas:
compararValores(5, "texto");
compararValores(0, "texto");
Saída:
true
false*/
function compararValores(valor1, valor2) {
    return Boolean(valor1) && Boolean(valor2);
}

console.log(compararValores(5, "texto")); // true
console.log(compararValores(0, "texto")); // false
console.log(compararValores(42, "")); // false
console.log(compararValores(42, "Retorno como verdadeiro")); // true

/*EXPLICAÇÃO
Essa função usa Boolean(valor) para converter cada valor em seu equivalente "truthy" ou "falsy" e verifica se ambos são "truthy" com o operador lógico &&.

Os valores considerados "falsy" em JavaScript incluem 0, "" (string vazia), null, undefined, NaN e false. Qualquer outro valor é tratado como "truthy"*/