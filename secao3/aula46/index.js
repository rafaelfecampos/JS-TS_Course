const mostraHora = () => {
    let data = new Date();

    return data.toLocaleTimeString('pt-BR', {
        hour12: false
    });
}

const intervalo = () => {
    console.log(mostraHora());

}

const timer = setInterval(intervalo, 1000);

setTimeout(() => {
    clearInterval(timer);
}, 10000)
