const f1 = (callback) => {
    setTimeout(() => {
        console.log('f1');
        if (callback) callback();
    }, gerarTimeOut())
}
const f2 = (callback) => {
    setTimeout(() => {
        console.log('f2');
        if (callback) callback();
    }, gerarTimeOut())
}
const f3 = (callback) => {
    setTimeout(() => {
        console.log('f3');
        if (callback) callback();
    }, gerarTimeOut())
}

const gerarTimeOut = () => {
    return Math.ceil(Math.random() * 1000);
}

// f1(() => {
//     f2(() => {
//         f3(() => {
//             console.log("Hello World");
//         })
//     })
// });
//callback hell -> boneca russa, função que chama outra função que chama outra função ...

//para evitar eeste callbac hell

const f1Callback = () =>{
    f2(f2Callback);
}

const f2Callback = () =>{
    f3(f3Callback)
}

const f3Callback = () =>{
    console.log("HelloWorld");
}

f1(f1Callback); //para poder chamar a função antes de seu escopo ela nao pode ser do tipo let nem const




