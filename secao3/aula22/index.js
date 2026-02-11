console.log(true && true && true && true);//op logico "E"
console.log(true && false && true && true);//op logico "E"

console.log(true || true || false || true); //op logico "OU"

console.log(true || true && false); //&& tem prioridade -> sua lógica é feita primeiro

console.log(!true); //NOT
console.log(!false);
console.log(!!false);
console.log(!!true);


//exemplo
const helloWorld = () =>{
    console.log("Hello World!");
    
}

let executar = true;

executar && helloWorld();

executar = false
executar && helloWorld() || console.log(`nao executou`);






