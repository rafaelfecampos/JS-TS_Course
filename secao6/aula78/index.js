//superclasse
function Conta(agencia, conta, saldo) { 
    this.agencia = agencia;
    this.conta = conta;
    this.saldo = saldo;

}

Conta.prototype.sacar = function (valor) {
    if (this.saldo < valor) {
        console.log(`SALDO INSUFICIENTE! -- valor a sacar: R$${valor.toFixed(2)}`);
        this.verSaldo();
        return;
    }
    this.saldo -= valor;
    this.verSaldo();
};
Conta.prototype.depositar = function (valor) {
    this.saldo += valor;
    this.verSaldo();
};
Conta.prototype.verSaldo = function () {
    console.log(`Ag/C.: ${this.agencia}/${this.conta} \nSaldo: R$${this.saldo.toFixed(2)} \n--------------------`);

};
//------------------------------------------------------------------------------------------
//Classes Filho

function ContaCorrente(agencia, conta, saldo, limite){
    Conta.call(this, agencia, conta, saldo);
    this.limite = limite;
}
ContaCorrente.prototype = Object.create(Conta.prototype);
ContaCorrente.prototype.constructor = ContaCorrente;

ContaCorrente.prototype.sacar = function(valor){
    if(valor > (this.saldo + this.limite)){
        console.log(`SALDO INSUFICIENTE! -- valor a sacar: R$${valor.toFixed(2)}`);
        this.verSaldo();
        return;
    }

    this.saldo -= valor;
    this.verSaldo();
}

ContaCorrente.prototype.verLimite = function () {
    console.log(`Ag/C.: ${this.agencia}/${this.conta} \nLimite: R$${this.limite.toFixed(2)} \n--------------------`);

};

//------------------------------------------------------------------------------------------------
function ContaPoupanca(agencia, conta, saldo){
    Conta.call(this, agencia, conta, saldo);
}
ContaPoupanca.prototype = Object.create(Conta.prototype);
ContaPoupanca.prototype.constructor = ContaPoupanca;

const conta1 = new Conta(11, 22, 10);
// conta1.verSaldo();
// conta1.depositar(150);
// conta1.sacar(30)
// conta1.sacar(130.01)
const conta2 = new ContaCorrente(12, 22, 15, 1000);
conta2.verSaldo();
conta2.verLimite();
conta2.sacar(1015.01);

const conta3 = new ContaPoupanca(13,22,10);
conta3.verSaldo();
conta3.sacar(9);