const verdadeiro = true;

//let tem escopo de bloco {....}
//var tem escopo de função

let nome = `Luiz`;//criado
var nome2 = `Luisa`;//criado

if(verdadeiro){
    let nome = `Otavio`;//criado
    var nome2 = `Josney`;//redeclarado
    {
        let nome = `Jailton`;//criado
        var nome2 = `Willian`;//redeclarado
        console.log(nome, nome2);


    }

}