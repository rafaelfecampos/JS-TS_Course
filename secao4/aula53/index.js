const retornarFuncao = (nome) =>{
    // const nome = "Rafael";
    return () =>{
        return nome;
    }
}

const funcao = retornarFuncao("Rafael");
const funcao2 = retornarFuncao("Rafaela");
console.dir(funcao);
console.dir(funcao2);

//closure: capacidade que a função tem de guardar as informações que foram transmitidas a ela quando foi criada, ex: quando uma função filho recebe parametros de uma função pai.