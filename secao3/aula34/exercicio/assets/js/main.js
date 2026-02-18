const elementos = [
    {tag: `h1`, texto: `Frase 1`},
    {tag: `div`, texto: `Frase 2`},
    {tag: `footer`, texto: `Frase 3`},
    {tag: `section`, texto: `Frase 4`},

]

document.addEventListener('DOMContentLoaded', (event) =>{
    event.preventDefault();
    const section = document.querySelector(`.container`)
    for (let i = 0; i < elementos.length; i++) {
        let elemento = elementos[i]
        section.innerHTML+= `<${elemento.tag}> ${elemento.texto} </${elemento.tag}>`;
    }
})