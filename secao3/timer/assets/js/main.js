const timer = document.querySelector(".timer");
const iniciar = document.querySelector(".iniciar");
const pausar = document.querySelector(".pausar");
const zerar = document.querySelector(".zerar");

let seg = 55, min = 59, hora = 23;
let timerId = null;
let isPausado = false;

iniciar.addEventListener(`click`, (event) =>{
    event.preventDefault();
    iniciarTimer();
});

pausar.addEventListener(`click`, (event) =>{
    event.preventDefault();
   pausarTimer();
});

zerar.addEventListener(`click`, (event) =>{
    event.preventDefault();
    zerarTimer();
});

const iniciarTimer = () =>{ 
    if(isPausado){
        timer.classList.remove("pausado");
        pausar.classList.remove("pausado");
        isPausado = false;
    }

    timerId = setInterval(() =>{  
        contar()
        const h = String(hora).padStart(2,'0');        
        const m = String(min).padStart(2,'0');        
        const s = String(seg).padStart(2,'0');    
        
        timer.textContent = `${h}:${m}:${s}`;
    },1000);

    alert("Timer iniciado!");
}

const contar = () => {    
    seg++;    
    if(seg >= 60)
        min++;
    if(min >= 60)
        hora++;
    if(hora >= 24){
        seg = 0;
        min = 0;
        hora = 0;
        alert("Cronometro reiniciado automaticamente!");
    }
}

const zerarTimer = () =>{
    clearInterval(timerId);
    [seg, min, hora] = [0, 0, 0];
    timer.textContent = `00:00:00`;
    alert("Timer zerado!")
}

const pausarTimer = () =>{
    clearInterval(timerId);
    isPausado = true;
    timer.classList.add("pausado");
    pausar.classList.add("pausado");
    pausar.textContent = "Pausado";
    alert("Timer pausado");
}
