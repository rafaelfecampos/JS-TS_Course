const produto = { nome: 'Caneca', preco: 1.8 }
// const outraCoisa = produto; //aponta para o mesmo endereço na memória
const outraCoisa = { 
    ...produto,
    material: 'camurça'
}

outraCoisa.nome = 'sofá';
outraCoisa.preco = 50;

console.log(produto);
console.log(outraCoisa);
