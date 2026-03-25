// let cpf = '705.484.450-52';
// let cpfLimpo = cpf.replace(/\D+/g, '');
// console.log(cpfLimpo);

// let cpfArray = Array.from(cpfLimpo);
// console.log(cpfArray);

// console.log(cpfArray.reduce((ac, val) => ac + Number(val), 0));


function ValidarCpf(cpfSent) {
    Object.defineProperty(this, 'cpfLimpo', {
        // enumerable: true,
        get: function () {
            return cpfSent.replace(/\D+/g, '');
        }
    });
}

ValidarCpf.prototype.valida = function () {
    if (typeof this.cpfLimpo === 'undefined') return false;

    if (this.cpfLimpo.length !== 11) return false;

    const cpfParcial = this.cpfLimpo.slice(0, -2);
    const digito1 = this.criaDigito(cpfParcial);
    const digito2 = this.criaDigito(cpfParcial + digito1);
    // console.log(digito1);
    // console.log(digito2);

    const novoCpf = cpfParcial + digito1 + digito2;
    
    return novoCpf === this.cpfLimpo;
}

ValidarCpf.prototype.criaDigito = function (cpfParcial) {
    const cpfArray = Array.from(cpfParcial);
    // console.log(cpfArray);

    let regressivo = cpfArray.length + 1;
    const total = cpfArray.reduce((ac, val) => {
        ac += regressivo * Number(val);
        regressivo--;
        return ac;
    }, 0)

    const digito = 11 - (total % 11);
    
    return digito > 9 ? '0' : String(digito);

}

const cpf = new ValidarCpf('705.484.450-51');
// console.log(cpf.cpfLimpo);
console.log(cpf.valida());

