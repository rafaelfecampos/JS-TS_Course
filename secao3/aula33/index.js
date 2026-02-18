const pessoa = {
    nome: `Luiz`,
    sobrenome: `Miranda`,
    idade: 30,
    endereco: {
        rua: `A`,
        numero: 52,
        bairro: `Piraçununga`,
        cidade: `Bom Sucesso`
    }
}
const { nome = "", sobrenome: surname, idade, endereco: { rua, cidade } } = pessoa; //atribuição via desestruturação
console.log(nome, surname, idade, rua, cidade);
