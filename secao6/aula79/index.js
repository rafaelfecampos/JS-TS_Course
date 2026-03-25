const falar ={
    falar(){
        console.log(`${this.nome} ${this.sobrenome} está falando`);
    }
}
const comer ={
    comer(){
        console.log(`${this.nome} ${this.sobrenome} está comendo`);
    }
}
const beber ={
    beber(){
        console.log(`${this.nome} ${this.sobrenome} está bebendo`);
    }
}

// const pessoaPrototype = {... falar, ...comer, ...beber};
const pessoaPrototype = Object.assign({}, falar, comer, beber);

function criarPessoa(nome, sobrenome){
    // const pessoaPrototype = {
    //     falar() {
    //         console.log(`${this.nome} ${this.sobrenome} está falando`);
    //     },
    //     comer() {
    //         console.log(`${this.nome} ${this.sobrenome} está comendo`);
    //     },
    //     beber() {
    //         console.log(`${this.nome} ${this.sobrenome} está bebendo`);
    //     },
    // }
    return Object.create(pessoaPrototype,{
        nome: {value: nome},
        sobrenome: {value: sobrenome},
    });
}

const p1 = criarPessoa("Rafael", "Campos");