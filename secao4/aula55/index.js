//IIFE - Immediately invoked functin expression

((sobrenome) => {
    const nome = "Rafael";
    falaOi(nome);

    function falaOi(nome){
    console.log(`Olá ${nome} ${sobrenome}`);
    
}

})("Campos");

const nome = "Claudio";

