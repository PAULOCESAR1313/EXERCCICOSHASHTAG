//FOR

//Lista de funcionarios de um Zoologico.
let funcionarios = 
[
    {
        nome: "João",
        categoria: "Veterinario",
        salario: 3500,
        disponivel: true,
    },

    {
        nome: "Maria",
        categoria: "Administrativo",
        salario: 1800,
        disponivel: true,
    },

    {
        nome: "Ricardo",
        categoria: "Tratador",
        salario: 2500,
        disponivel: false,
    },

    {
        nome: "Renata",
        categoria: "Tratador",
        salario: 2500,
        disponivel: false,
    },

    {
        nome: "Paulo",
        categoria: "Veterinario",
        salario: 2500,
        disponivel: false,
    },
];

//Listar funcionarios por categoria.

function listarFuncionarioCategoria (categoria)
{
    console.log(`Funcionario na categoria: ${categoria}`);
    for(let index = 0; index < funcionarios.length; index++)
        {
            if(funcionarios[index].categoria === categoria) 
                {
                    console.log(funcionarios[index].nome);
                }
        }
};

listarFuncionarioCategoria("Veterinario");

//Função calcula o total pago em sálario ao funcionarios.

function calcularSalario ()
{
    let totalSalario = 0;
    for(let i = 0; i < funcionarios.length; i++)
    {
        totalSalario += funcionarios[i].salario; 
    }
    return totalSalario;
};

console.log(calcularSalario());

//função para contar os funcionarios que estão disponiveis = true.

function conteDisponivel ()
{
    let contador = 0;
    for(let i = 0; i < funcionarios.length; i++)
        {
            if(funcionarios[i].disponivel)
                {
                    contador++;
                }
        }
    return contador
};

console.log(`Funcionarios disponiveis para hoje é: ${(conteDisponivel())}`);