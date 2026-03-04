const nomes = ['Zezin', 'Pedrin', 'Luizin'];
// const nomes = new Array('Zezin', 'Pedrin', 'Craudin');
// console.log(nomes);

nomes[2] = "Craudin"
console.log(nomes);

delete nomes[2]
console.log(nomes);

nomes[2] = "Claudin"
console.log(nomes);

nomes.pop()
console.log(nomes);

nomes.push("Craudio");
console.log(nomes);

const nome = nomes.join(' ');
console.log(nome);

