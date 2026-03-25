function Pessoa(nome, sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;
}

const pessoa1 = new Pessoa("Shaolin", "Matador de porco");
const pessoa2 = new Pessoa("Flavin", "do Pneu");
console.log(pessoa1);
console.log(pessoa2);
