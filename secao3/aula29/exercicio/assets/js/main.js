const container = document.querySelector(".container");

const getDiaSemanaTexto = (dia) => {
    switch (dia) {
        case 0: return "Domingo";
        case 1: return "Segunda-Feira";
        case 2: return "Terça-Feira";
        case 3: return "Quarta-Feira";
        case 4: return "Quinta-Feira";
        case 5: return "Sexta-Feira";
        case 6: return "Sábado";
        default: return "Dia Inválido";
    }
}

const getMesTexto = (mesIndex) => {
    const meses = [
        "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
        "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
    ];
    return meses[mesIndex] || "Mês Inválido";
}

document.addEventListener('DOMContentLoaded', (event) => {
    console.log("Carregado");

    const data = new Date(2015, 9, 20, 11, 56, 55);
    
    const diaTexto = getDiaSemanaTexto(data.getDay());
    const diaMes = data.getDate();
    const mesTexto = getMesTexto(data.getMonth());
    const ano = data.getFullYear();
    const hora = data.getHours();
    const minutos = data.getMinutes().toString().padStart(2, '0');

    container.innerHTML = `<h1> ${diaTexto}, ${diaMes} de ${mesTexto} de ${ano} - ${hora}:${minutos} </h1> `
});