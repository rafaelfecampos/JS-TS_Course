function Produto(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;
    // this.estoque = estoque;

    let estoquePriv = estoque;
    Object.defineProperty(this, 'estoque',{
        enumerable: true, //mostrar a chave
        configurable: false, //permite reconfigurar a chave
        get: function() {
            return estoquePriv;
        },
        set: function(quantidade) {
            if(typeof quantidade !== "number"){
                console.log(`${quantidade}: Valor impróprio`);
                return;
            }
            estoquePriv = quantidade;
        }
    })
}

function criarProduto(){
    return {
        get
    }
}

const produto1 = new Produto("Camiseta", 20, 5)
console.log(produto1);
console.log(produto1.estoque);
produto1.estoque = "5"
produto1.estoque = 10
console.log(produto1.estoque);
