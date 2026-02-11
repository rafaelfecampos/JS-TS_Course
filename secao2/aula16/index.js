let alunos = [`Luiz`, `Maria`, `João`]
console.log(alunos);
console.log(alunos[0]); //aluno index 0
console.log(alunos[1]); //aluno index 1
console.log(alunos[2]); //aluno index 2

alunos[0] = `Luiz Eduardo`; //altera o index 0

console.log(alunos);

alunos[3] = `Luisa`; //adiciona elemento no index 3 que antes estava vazio
console.log(alunos);

alunos.push(`Ronaldo`); //adiciona no final do array
console.log(alunos);

const removido1 = alunos.pop(); //remove o ultimo elemento
console.log(`Removido: ` + removido1);

console.log(alunos);

alunos.unshift(`Ronaldo`) //adiciona no inicio
alunos.unshift(`Vampeta`) //adiciona no inicio
console.log(alunos);

const removido2 = alunos.shift();//remove o primeiro elemento
console.log(`Removido: ${removido2}`);
console.log(alunos);

delete alunos[1]; //limpa o indice especificado
console.log(alunos[1]);//elemento vazio é undefined
console.log(alunos);

alunos[1] = `Almada`
console.log(alunos.slice(1,-1));//imprime o array alunos do index 1 até o penultimo index

console.log(typeof alunos);
console.log(alunos instanceof Array);








