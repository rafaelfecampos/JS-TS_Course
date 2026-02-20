function funcao(a, b, c) { //este tipo de estrutura com "arguments" só funciona com o estilo "function"
    let total = 0;
    for (let argumento of arguments) {
        total += argumento
    }

    console.log(total, a, b, c);


}

//alternativa para o arguments
const funcao2 = (...args) =>{
    console.log(args);
    
}
funcao2(1,2,3,4,5,6,7,"xereca")
// funcao(1, 2);

function soma(a, b = 3) {
    console.log(a + b);

}

// soma(2, undefined);

function identificarPessoa({ nome, sobrenome, idade }) {
    console.log(nome, sobrenome, idade);
}

const pessoa = {
    nome: "Willian",
    sobrenome: "porta luva",
    idade: 69
}

// identificarPessoa(pessoa);

function separarNumeros([v1, v2, v3]) {
    console.log(v1, v2, v3);
}
// separarNumeros([1,2,3,4,5,6,7,8,9,10]);

function fazerOperacao(operador, acumulador, ...valores) {
    if (operador === "+") {
        for (let valor of valores) {
            acumulador += valor;
        }
    } else if (operador === "-") {
        for (let valor of valores) {
            acumulador -= valor;
        }
    } else if (operador === "*") {
        for (let valor of valores) {
            acumulador *= valor;
        }
    } else if (operador === "/") {
        for (let valor of valores) {
            acumulador /= valor;
        }
    } else {
        console.log(acumulador);
        
    }
    console.log(acumulador);


}

fazerOperacao("/", 1, 1, 2, 3, 4, 5, 6, 7)
