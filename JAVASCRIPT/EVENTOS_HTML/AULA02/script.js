/* 
onmouseover="this.style.color='red';"
onmouseout="this.style.color='black'"
*/

function mudarCor(elemento, cor)
{
    elemento.style.color = cor;
};

/* onclick="alert('Olha que legal!')" */

function aviso()
{
    alert("Texto Alterado!!");
};

/* 
onfocus="this.value='DIGITE SEU NOME!';" 
onblur="this.value='';" 
*/

function focando(elemento)
{
    elemento.value="Digite seu nome completo!!";
};

function desfocando(elemento)
{
    elemento.value="";
};

/* 
onmouseover="this.src='img/imagem2.png';"
onmouseout="this.src='img/imagem1.png';" 
*/

function mouseUp(elemento)
{
    elemento.src="img/imagem2.png";
};

function mouseDow(elemento)
{
    elemento.src="img/imagem1.png";
};