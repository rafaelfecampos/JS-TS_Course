function Produto(nome, preco){
    this.nome = nome;
    this.preco = preco;
}

Produto.prototype.aumento = function(percentual){
    return this.preco*(1+(percentual/100));
}
Produto.prototype.desconto = function(percentual){
    return this.preco*(1-(percentual/100));
}

function Camiseta(nome, preco, cor){
    Produto.call(this, nome, preco )
    this.cor = cor;
}

Camiseta.prototype = Object.create(Produto.prototype)
Camiseta.prototype.constructor = Camiseta;

function Caneca(nome, preco, material){
    Produto.call(this, nome, preco )
    this.material = material;
}

Caneca.prototype = Object.create(Produto.prototype)
Caneca.prototype.constructor = Caneca;

const camiseta = new Camiseta("Regata", 35, "Branca");
const caneca = new Caneca("Regata", 10, "Ceramica");


console.log(camiseta);
console.log(camiseta.aumento(10));
console.log(caneca);
console.log(caneca.desconto(10));

