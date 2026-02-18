// try{
//     console.log(naoExiste);
    
// }catch(err){
//     console.log("Inexistente");
// }

const soma = (x, y) =>{
    if (typeof x !== 'number' || typeof y !== 'number'){
        throw("x e y precisam ser do tipo number")
    }

    return x + y;
}

try {
    console.log(soma(5, "nove" ));
    
} catch (error) {
    console.log(error);
    
}
