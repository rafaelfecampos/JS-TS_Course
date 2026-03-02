function criarPessoa ( nome, sobrenome ){
    return {
        nome,
        sobrenome,
        fala(acao) {
            return `${this.nome} ${this.sobrenome} está ${acao}!`;
        }
    }
}

const p1 = criarPessoa("Rodolfo", "Johnson");
console.log(p1.fala("dormindo"));
