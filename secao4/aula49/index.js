//Declaração de função
falaOi(); //Function Hoisting

function falaOi() {
    console.log("Hellooo World!");
}

//Funções são objetos de primeira classe
const helloWorld = function(){ //functin expression
    console.log("Ola mundo");
}
helloWorld();

function executaFalaOi(oiiiii){
    oiiiii();
}

executaFalaOi(helloWorld);

const arrowOi = () =>{ //arrow function
    console.log("Oie");
    
}
arrowOi();

//dentro de um objeto
const musica = {
    titulo: "porta luva",
    tocar: () =>{
        console.log("Meu carro nao tem porta luva");
        
    }
}

musica.tocar();
