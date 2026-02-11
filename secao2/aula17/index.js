// function hello (name){
//     console.log(`Hello ${name}!`)

//     return `libertadores 2024`

// }

// console.log(hello(`Rafael`));
// console.log(hello(`Luiz Henrique`));
// console.log(hello(`Igor Jesus`));
// console.log(hello(`Gregore`));

function soma(x, y) {
    if (typeof x === "number" && typeof y === "number")
        return x + y;
    else
        return `Inválido`;
}


console.log(soma(3, Math.PI).toFixed(3));

console.log(`Com string: ${soma(`Gregore`, `Luiz`)}`); //a função está concatenando

const raiz = function (n) {
    return n ** 0.5;
}

console.log(raiz(9));

const quadrado = n => n ** 2; //arow function


console.log(quadrado(25.35).toFixed(3));



