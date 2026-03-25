// const objA = {
//     chave1:'A',
// }

// const objB = {
//     chave2: "B"
// }

// Object.setPrototypeOf(objB, objA);

// console.log(objB.chave1);

function Produto(nome, preco){
    this.nome = nome;
    this.preco = preco;

}

Produto.prototype.desconto = function(percentual){
   return this.preco - (this.preco*(percentual/100));
}
Produto.prototype.aumento = function(percentual){
   return this.preco + (this.preco*(percentual/100));
}

const produto1 = new Produto("Camisa", 10);
const produto2 = new Produto("Bermuda", 8);

console.log(produto1.desconto(5));
console.log(produto2.desconto(10));
console.log(produto1.aumento(5));
console.log(produto2.aumento(10));
