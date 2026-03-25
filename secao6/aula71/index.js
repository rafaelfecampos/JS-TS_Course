function Produto(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;
    // this.estoque = estoque;

    Object.defineProperty(this, 'estoque',{
        enumerable: false, //mostrar a chave
        value: estoque, //mostrar o valor
        writable: false, //permite alterar o valor
        configurable: false //permite reconfigurar a chave
    })
}

const produto1 = new Produto("Camiseta", 20, 5)
produto1.estoque = 545453;
console.log(produto1);

console.log(Object.keys(produto1));

