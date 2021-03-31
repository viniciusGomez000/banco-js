export class Conta{

    constructor(saldoInicial, cliente, agencia){
        this._saldo = saldoInicial;
        this._cliente = cliente;
        this._agencia = agencia;
    }

    get client(){
        return this._cliente;
    }

    get saldo(){
        return this._saldo;
    }
    
    set cliente(NovoValor){
        if(NovoValor instanceof Cliente){
            this._cliente = NovoValor;
        }
    }

    sacar(valor){
        let taxa = 1;
        const ValorSacado = taxa * valor
        if(this._saldo >= ValorSacado){
            this._saldo -= ValorSacado;
            return ValorSacado;
        }
    }

    deposit(valor){
        this._saldo += valor;
    }

    transferir(valor, conta){
        const vsaque = this.sacar(valor);
        conta.deposit(vsaque);
    }

}