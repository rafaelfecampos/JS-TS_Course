function criaCalculadora() {
    return {
        display: document.querySelector(`.display`),

        inicia() {
            alert("Bem vindo!");
            this.clicarBotoes();
        },

        clicarBotoes() {
            document.addEventListener('click', (event) => {
                event.preventDefault();

                const element = event.target;

                if (element.classList.contains('btn-num')) {
                    this.btnToDisplay(element.innerText);
                }
                if (element.classList.contains('btn-clear')) {
                    this.clear()
                }
                if (element.classList.contains('btn-del')) {
                    this.deletar();
                }
                if (element.classList.contains('btn-eq')) {
                    this.resolver();
                }
            });
        },

        btnToDisplay(valor) {
            this.display.value += valor;

        },

        clear() {
            this.display.value = "";
        },

        deletar() {
            this.display.value = this.display.value.slice(0, -1);
        },

        resolver() {
            let expressao = this.display.value;

            try{
                expressao = eval(expressao);
                if(typeof expressao === "number"){                 
                    this.display.value = expressao;
                }
                else
                    throw Error;
            }catch(err){
                alert("Conta inválida!");
            }
        }
    }
}

const calculadora = criaCalculadora();
calculadora.inicia();