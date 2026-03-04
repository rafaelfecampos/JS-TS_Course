//filter retorna um novo array com base numa função de callback
const nums = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

const nums2 = []
for (let i = 0; i < nums.length; i++) {
    if(nums[i]>10)
        nums2.push(nums[i]);

}

const nums3 = nums.filter(valor => valor > 10)
// console.log(nums3);




const pessoas = [
    {nome: 'Pedrin', idade: 58},
    {nome: 'Zezin', idade: 69},
    {nome: 'Luizin', idade: 12},
    {nome: 'Craudin', idade: 23},
    {nome: 'JEffin', idade: 32},
    {nome: 'Faelzin', idade: 41}
];

// const pessoasFiltradas = pessoas.filter(({nome}) => nome.length>=7)
// console.log(pessoasFiltradas);
const pessoasComNomeGrande = pessoas.filter(pessoa => pessoa.nome.length > 6)
const pessoasMaisVelhasQue30anos = pessoas.filter(({idade}) => idade > 30);
const segundaLetraEhE = pessoas.filter(pessoa => pessoa.nome[1].toLowerCase() === 'e');

console.log(pessoasComNomeGrande);
console.log(pessoasMaisVelhasQue30anos);
console.log(segundaLetraEhE);


