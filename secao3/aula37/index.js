const nome = `Willian Potker`;

// for (let i = 0; i < nome.length ; i++){
//     console.log(nome[i]);
// }

// for (let i in nome){
//     console.log(nome[i]);
// }

for (let valor of nome){ //valor = valor na posição de iteração
    console.log(valor);
    
}

const pessoas = [nome, `Luiz`, `Cláudio`]

for (let pessoa of pessoas){
    console.log(pessoa);
}

console.log(`###############`);

pessoas.forEach( (elemento, index, array) =>{
    console.log(elemento + " "+ index, array);
    
})
