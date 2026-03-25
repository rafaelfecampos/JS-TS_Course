const pessoas =[ 
    {id:3 , nome: 'Danilo'},
    {id:2 , nome: 'Vitinho'},
    {id:1 , nome: 'Barboza'},
];

// const novasPessoas = [];


// for(const pessoa of pessoas){
    //     const {id} = pessoa
    //     novasPessoas[id-1] = {...pessoa};
    // }
    

const novasPessoas = new Map();
for(const pessoa of pessoas){
    const {id} = pessoa
    novasPessoas.set(id, {...pessoa});
} //mapeando o Objeto Map novasPessoas definindo o index e o objeto respectivo

console.log(novasPessoas);

for (const pessoa of novasPessoas) {
    console.log(pessoa);
}//pegando o array inteiro de pessoas, junto com o idx

for (const [idx, {id, nome}] of novasPessoas) {
    console.log(idx);
}//pegando somente o idx

for (const [idx, pessoa] of novasPessoas) {
    console.log(pessoa.nome);
}//pegando somente o objeto do array

for (const pessoa of novasPessoas.keys()) {
    console.log(pessoa);
}//pegando somente o idx

for (const pessoa of novasPessoas.values()) {
    console.log(pessoa);
}//pegando somente o objeto do array