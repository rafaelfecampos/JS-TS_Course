const frutas = ['Pera', 'Maçã', 'Abacate'];

for (let i in frutas){ //leitura de indeces
    console.log(i + ' ' + frutas[i]);
}

const pessoa = {
    nome: `Willian`,
    sobrenome: "Silva",
    idade: 25
}

for (let chave in pessoa){ //chave = propriedade do objeto
    console.log(i + ': ' + pessoa[i]);

}