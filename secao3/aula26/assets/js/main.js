const form = document.querySelector(`#formulario`);
const resultadoHTML = document.querySelector(`#resultado`);
const resultados = [];

form.addEventListener('submit', evento => {
  evento.preventDefault();
  let peso = form.querySelector(`#peso`).value;
  let altura = form.querySelector(`#altura`).value;
  let resultado;

  console.log(peso, altura);
  
  const imc = peso / (altura**2)

  if(imc < 18.5)
    resultado = `Abaixo do Peso`;
  else if(imc >=18.5 && imc <= 24.9)
    resultado = `Peso normal`;
  else if(imc >=25 && imc <= 29.9)
    resultado = `Sobrepeso`;
  else if(imc >=30 && imc <= 34.9)
    resultado = `Obesidade I`;
  else if(imc >=35 && imc <= 39.9)
    resultado = `Obesidade II`;
  else if(imc >=40)
    resultado = `Obesidade III`;
  resultados.push(resultado);

  resultadoHTML.innerHTML = `<p>${resultado} </p>`
})
        

