const nums = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];


console.log(nums.reduce((aux, valor) => { return aux += valor }, 0)); //retornando a soma total
const pares = nums.reduce((aux, num) => {
    if (num % 2 === 0)
        aux.push(num);
    return aux;
}, []); //não está correto fazer, o ideal é fazer com filter
const pares2 = nums.filter(valor => valor % 2 === 0);
console.log(pares);
console.log(pares2);

const dobro = nums.reduce((aux, valor) => {
    aux.push(valor*2);
    return aux;
}, []);//não está correto fazer, o ideal é fazer com map
const dobro2 = nums.map(valor => valor*2)
console.log(dobro);
console.log(dobro2);



const pessoas = [
    { nome: 'Pedrin', idade: 58 },
    { nome: 'Zezin', idade: 69 },
    { nome: 'Luizin', idade: 12 },
    { nome: 'Craudin', idade: 23 },
    { nome: 'JEffin', idade: 32 },
    { nome: 'Faelzin', idade: 41 }
];

const maisVelha = pessoas.reduce((aux, pessoa)=>{
    if(aux.idade > pessoa.idade) return aux;
    return pessoa;
})

console.log(maisVelha);
