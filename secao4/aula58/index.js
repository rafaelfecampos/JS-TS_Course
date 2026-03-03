//função construtora retorna objeto
//factory functions retornam objetos tbm

function Pessoa(nome, sobrenome) {
    const ID = Math.ceil(Math.random()*100000);

    this.nome = nome;
    this.sobrenome = sobrenome;

    this.falarNome = () =>{
        console.log(`Eu sou ${this.nome} ${this.sobrenome} e meu Id é ${ID}`);
        
    }
}

const p1 = new Pessoa("Willian", "Potker");
const p2 = new Pessoa("Zé", "Gatinha");

p1.falarNome();
p2.falarNome();
