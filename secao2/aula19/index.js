/*
Tipos de dados primitivos - string, nmber, boolean, undefinded, null, bigint, symbol
    São tipos imutáveis

Referências (são mutáveis) - array, object, function
*/
let str = "Botafogo";
str[0] = "A";
console.log(str); //o valor no index 0 não muda

let a = [1, 2 ,3];
a[0] = Math.PI.toFixed(4);//o valor no index 0 muda
console.log(a);

