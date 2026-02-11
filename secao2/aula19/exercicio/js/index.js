function escopo() {
    const form = document.querySelector('.form');
    const resultado = document.querySelector(`.resultado`);
    const pessoas = [];
    
    form.addEventListener('submit', event => {
        event.preventDefault();
        const nome = form.querySelector(".nome");
        const sobrenome = form.querySelector(".sobrenome");
        const peso = form.querySelector(".peso");
        const altura = form.querySelector(".altura");
        
        const pessoa = {
            nome: nome.value,
            sobrenome: sobrenome.value,
            peso: peso.value,
            altura: altura.value,
        }
    
           
        pessoas.push(pessoa);
        resultado.innerHTML += `<p>${nome.value} ${sobrenome.value} ${peso.value} ${altura.value} </p>`
        
        console.log(pessoas);

        nome.value = "";
        sobrenome.value = "";
        peso.value = "";
        altura.value = "";

        
    });

    
}

escopo();