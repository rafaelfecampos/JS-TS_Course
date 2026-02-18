// const data = new Date(0); //hora 0
// const tresHoras = 60 * 60 * 3 * 1000;
// const umDia = 60 * 60 * 24 * 1000;
// const data = new Date(tresHoras + umDia)

// const data = new Date(2026, 2, 11, 10, 30, 45, 5252) //a, m, d, h, min, s, ms

const data = new Date('2026-04-20 20:20:20.596');
console.log(data.toString());
console.log(`Dia ${data.getDate()}`); //get numero do dia
console.log(`Mes ${data.getMonth()}`); //get Mes
console.log(`Ano ${data.getFullYear()}`); //get  Ano
console.log(`Hora ${data.getHours()}`); //get Hora
console.log(`Minuto ${data.getMinutes()}`); //get minutos
console.log(`Segundo ${data.getSeconds()}`); //get segundos
console.log(`Milissegundos ${data.getMilliseconds()}`); //get milissegundos
console.log(`Dia semana ${data.getDay()}`); //get dia semana - 0->domingo, 6->sabado

console.log(Date.now());
console.log(new Date(Date.now()).toString());


