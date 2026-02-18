// ?:
let pontuacaoUser = 999;

//se >1000 é um user vip
const tipoUser = (pontuacao) =>{
    return pontuacaoUser >= 1000 ? 'User VIP' : 'User Comum';
}

console.log(tipoUser());

pontuacaoUser = 1001;

console.log(tipoUser());


