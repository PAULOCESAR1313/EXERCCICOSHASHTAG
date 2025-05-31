const input = document.getElementById("taskInput");
const ul = document.getElementById("taskList");

 function addTask()
 {
    if(input.value !== "")
    {
        const li = document.createElement("li");
        li.textContent = input.value;

     // Cria o botão para remover a tarefa
        const removerBotao = document.createElement("button");
        removerBotao.textContent = "Remover";
        removerBotao.classList.add("btn"); // Adiciona a classe para estilização
        removerBotao.onclick = function () {
            ul.removeChild(li);
        };
        li.appendChild(removerBotao);
        ul.appendChild(li);

        input.value = "";
    }else
    {
        alert("Por gentileza, digite a próxima tarefa");
    }
 };