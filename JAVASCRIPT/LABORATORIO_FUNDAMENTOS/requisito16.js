/* Crie uma função que receba uma frase e codifique as vogais de acordo com a seguinte substituições: a - 1, e - 2, i - 3, o - 4, u -5. Essa função deve também receber uma frase codificada e descodificar.
Função: codificadorDescodificador();
Entrada: "Oi, Voce consegue ler isso?"
Saída: "43, v4c2 c4ns2g52 l2r 3ss4?" 
Função: codificadorDescodificador();
Entrada: "c1p423r1 2 v3d1!"
Saída: "capoeira e vida!" */

function codificadorDescodificador(frase, modo = "codificar") {
    const mapaCodificacao = { a: "1", e: "2", i: "3", o: "4", u: "5" };
    const mapaDecodificacao = { "1": "a", "2": "e", "3": "i", "4": "o", "5": "u" };

    if (modo === "codificar") {
        return frase.replace(/[aeiou]/gi, letra => mapaCodificacao[letra.toLowerCase()]);
    } else if (modo === "decodificar") {
        return frase.replace(/[12345]/g, numero => mapaDecodificacao[numero]);
    } else {
        return "Modo inválido! Escolha 'codificar' ou 'decodificar'.";
    }
}

// Testando a função
console.log(codificadorDescodificador("Oi, Voce consegue ler isso?", "codificar")); 
// Saída: "43, v4c2 c4ns2g52 l2r 3ss4?"

console.log(codificadorDescodificador("c1p423r1 2 v3d1!", "decodificar")); 
// Saída: "capoeira e vida!"

/* Explicação:
Modo "codificar": Substitui vogais pelas respectivas numerações.

Modo "decodificar": Substitui os números pelas vogais originais.

Usa .replace() junto com regex para encontrar e substituir corretamente. */