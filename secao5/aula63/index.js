const nomes = ["Zezin", 'Craudin', 'Luizin'];
nomes.push('Markin');
nomes.unshift("Pedrin");

console.log(nomes);
//nomes.splice(idx, quant elementos, add el1, add el2, add e3...)
const removidos = nomes.splice(3,2,"Filipin")
console.log(nomes);
console.log(removidos);
