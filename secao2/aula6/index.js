//var x let
//var -> it ignores the scope, accepts variable redeclaration and it is inicialized as undefined
//let -> it respects the scope, doesn't accepts variable redeclation and it isn't inicialized until a value is attached to the variable 


var text = "Hello World!"

console.log(text);

let name = "João";
console.log(`His name is ${name} `);
name = "Joao Pedro";
console.log(`Sorry, his name actually is ${name}`);

const name2 = "William";
console.log(`His brother is ${name2}`);
// name2="Otavio"
console.log("I Can't change Willian's name beacause it is a const");




