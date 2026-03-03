function Calculadora() {
    this.display = document.querySelector(".display");


    this.iniciar = () => {
        alert("Bem vindo!")
        this.capturarCliques();
    }

    this.capturarCliques = () => {
        document.addEventListener('click', (event) => {
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
        })
    }

    this.btnToDisplay = (valor) => {
        this.display.value += valor;
    }
    this.clear= () => {
        this.display.value = "";
    }
    this.deletar= () => {
        this.display.value = this.display.value.slice(0, -1);
    }
    this.resolver= () => {
        let expressao = this.display.value;

        try {
            expressao = eval(expressao);
            if (typeof expressao === "number") {
                this.display.value = expressao;
            }
            else
                throw Error;
        } catch (err) {
            alert("Conta inválida!");
        }
    }

}

const calculadora = new Calculadora();
calculadora.iniciar()