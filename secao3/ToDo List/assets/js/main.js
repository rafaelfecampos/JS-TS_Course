const adicionar = document.querySelector(".addNovaTarefa");
const novaTarefa = document.querySelector(".novaTarefa");
const listaTarefas = document.querySelector(".lista");

adicionar.addEventListener("submit", (event)=>{
    event.preventDefault()
    adicionarTarefa();    
})

const adicionarTarefa = () =>{

    console.log("logado");
    console.log(novaTarefa.value);
    
    if(!novaTarefa.value) return
    
    const lista = addLista();
    lista.innerText = novaTarefa.value + " ";
    console.log(lista);
    
    limparInput();
    criarApagar(lista);
    salvarTarefa(lista);
}

const addLista = () =>{
    return document.createElement("li");
}

const limparInput = () =>{
    novaTarefa.value = "";
}

const criarApagar = (lista) =>{
    const botao = document.createElement("button");
    botao.innerText = "Apagar";
    botao.setAttribute("class","apagar");
    botao.addEventListener('click', function() {
        lista.remove(); // Remove o LI ao qual este botão pertence
    });
    lista.appendChild(botao);
}

const salvarTarefa = (lista) =>{
    listaTarefas.appendChild(lista);
}

