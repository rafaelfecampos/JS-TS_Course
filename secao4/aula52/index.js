const nome = "Lucio";

const falarnome = () =>{
    console.log(nome);    
}

const usarFalarNome = () =>{
    const nome = "Outro nome"
    falarnome();
}

usarFalarNome()