import {Cliente} from "./Cliente.js"
import {Conta} from "./Conta.js"

export class ContaCorrente extends Conta{
    static ncontas = 0;
    constructor(cliente, agencia){
        super(0, cliente, agencia);
        ContaCorrente.ncontas += 1;
    }
    
    sacar(valor){
        let taxa = 1.1;
        const ValorSacado = taxa * valor
        if(this._saldo >= ValorSacado){
            this._saldo -= ValorSacado;
            return ValorSacado;
        }
    }
}