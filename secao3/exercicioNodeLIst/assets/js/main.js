const paragrafos = document.querySelector(".paragrafos");
const pp = paragrafos.querySelectorAll("p");
const estiloBody = getComputedStyle(document.body);
const bgColorBody = estiloBody.backgroundColor;

console.log(bgColorBody);

for (let p of pp){
    p.style.backgroundColor = bgColorBody;
    p.style.color = `#FFFFFF`;
}
