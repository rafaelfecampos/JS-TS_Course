const elementos = [
    {tag: `h1`, texto: 'Frase 1'},
    {tag: `div`, texto: `Frase 2`},
    {tag: `footer`, texto: `Frase 3`},
    {tag: `section`, texto: `Frase 4`},

]

// document.addEventListener('DOMContentLoaded', (event) =>{
//     event.preventDefault();
//     const section = document.querySelector(`.container`)
//     for (let i = 0; i < elementos.length; i++) {
//         let elemento = elementos[i]
//         section.innerHTML+= `<${elemento.tag}> ${elemento.texto} </${elemento.tag}>`;
//     }
// })

const container = document.querySelector('.container');
const div = document.createElement('div');

for (let i = 0; i < elementos.length; i++) {
    let { tag, texto } = elementos[i];
    let tagCriada = document.createElement(tag);
    let textoCriado = document.createTextNode(texto);

    tagCriada.appendChild(textoCriado);
    div.appendChild(tagCriada);
}

container.appendChild(div);