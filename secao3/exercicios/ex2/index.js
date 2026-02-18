const ehPaisagem = (altura, largura) =>{
    return largura > altura;
}


const altura = 128;
const largura = 256;
console.log(`Uma imagem de ${altura}x${largura} é paisagem? ${ehPaisagem(altura, largura)? `sim`: `não`}`);
