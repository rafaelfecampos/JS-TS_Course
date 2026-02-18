// const maior = (n1, n2) => {
//     if (n1 > n2) {
//         return n1;
//     } else if (n2 > n1) {
//         return n2;
//     } else {
//         console.log("Números iguais");
//         return null;
//     }
// }
// const maior = (n1,n2) =>{
//     return n1 > n2 ? n1 : n2;
// }

const maior = (n1, n2) => n1 > n2 ? n1 : n2;

const n1 = 10;
const n2 = 5;

console.log(`Entre ${n1} e ${n2} o maior é ${maior(n1, n2)}`);
