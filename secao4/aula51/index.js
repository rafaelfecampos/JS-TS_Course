//return retorna um valor kkkkk obvio porra

const soma = (a, b) => {
    return a + b;
}

document.addEventListener('click', () => {
    document.body.style.backgroundColor = `rgb(${gerarHexadecimal()},${gerarHexadecimal()},${gerarHexadecimal()})`
})

const gerarHexadecimal = () => {
    return Math.floor(Math.random() * 256);
}

const criarPessoa = (nome, sobrenome) => {
    return {
        nome: nome,
        sobrenome: sobrenome
    }
}

const pessoa1 = criarPessoa("Claudio", "Castolo");
console.log(pessoa1);

const falarFrase = (inicio)
