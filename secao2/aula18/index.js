// const pessoa1 = {
//     nome: `Luiz Henrique`,
//     sobrenome: `Silva`,
//     profissao: `Caçador de Urubu`
// };

// console.log(pessoa1);

// console.log(`Nome: ${pessoa1.nome}`);
// console.log(`sobrenome: ${pessoa1.sobrenome}`);
// console.log(`profissao: ${pessoa1.profissao}`);

const criarPessoa = (nome, sobrenome, profissao) => { //função factory -> cria objetos
    return {
        nome: nome,
        sobrenome: sobrenome,
        profissao: profissao,

        frase() {
            return `Me chamo ${nome} ${sobrenome}, sou ${profissao} e sou campeão da Libertadores 2024 pelo Botafogo de Futebol e Regatas`
        }
    }
}

const pessoa1 = criarPessoa(`Luiz Henrique`, `Silva`, `Caçador de urubu`);
const pessoa2 = criarPessoa(`Thiago`, `Almada`, `Mágico`);

console.log(typeof pessoa1);
console.log(pessoa1.frase());
console.log(typeof pessoa2);
console.log(pessoa2.frase());

