const nums = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

const numsDobrados = nums.map(valor => valor * 2)
// console.log(numsDobrados);

const pessoas = [
    { nome: 'Pedrin', idade: 58 },
    { nome: 'Zezin', idade: 69 },
    { nome: 'Luizin', idade: 12 },
    { nome: 'Craudin', idade: 23 },
    { nome: 'JEffin', idade: 32 },
    { nome: 'Faelzin', idade: 41 }
];

const nomes = pessoas.map(pessoa => pessoa.nome);
console.log(nomes);
const idades = pessoas.map(pessoa => ({ idade: pessoa.idade }));
console.log(idades);
const pessoasComId = pessoas.map((pessoa, idx) => {
    const newPessoa = {...pessoa};
    newPessoa.id = idx;
    return newPessoa;
});
console.log(pessoasComId);

//principais diferenças entre filter e map
//filter -> filtra dados, possui tamanho menor ou igual ao original e a função callback retorna um booleano
//map -> modifica os dados originais em um novo array, possui tamanho IGUAL ao original e a função callback precisa retornar o novo valor que substitui o original