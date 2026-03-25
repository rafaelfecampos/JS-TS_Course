function Pessoa(nome, sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;
    // this.nomeCompleto = () => this.nome + ' ' + this.sobrenome;

}

Pessoa.prototype.nomeCompleto = function (){
    return this.nome + ' ' + this.sobrenome;
}

const pessoa1 = new Pessoa("Shaolin", "Matador de Porco");
const pessoa2 = new Pessoa("Flavin", "do Pneu");
const data = new Date()

console.dir(pessoa1)
console.dir(pessoa2)
console.dir(data)

//prototype funciona como a herança nas classes em Java
//JS é baseada em protótipos. Objetos herdam as propriedades e os métodos dos prototipos