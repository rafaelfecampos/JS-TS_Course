//retorne a soma do dobro de números pares
const nums = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

const numerosPares = nums.filter(valor => valor % 2 === 0);
const dobroNumPares = numerosPares.map(valor => valor * 2);
const total = dobroNumPares.reduce((aux, valor) =>{return aux+= valor},0)

// console.log(numerosPares);
// console.log(dobroNumPares);
// console.log(total);

//resumindo isso tudo
console.log(nums
    .filter(valor => valor % 2 === 0)
    .map(valor => valor * 2)
    .reduce((aux, valor) => aux + valor)
);
