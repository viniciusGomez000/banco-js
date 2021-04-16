import {Cliente} from "./Cliente.js"
import {ContaCorrente} from "./ContaCorrente.js"
import {ContaPoupanca} from "./ContaPoupanca.js"
import {Conta} from "./Conta.js"

const cliente1 = new Cliente("Ricardo", 11122233309);
const contacorrente1 = new ContaCorrente(cliente1, "246");
const contapoupa1 = new ContaPoupanca(50, cliente1, "246")

let valor = 200
contacorrente1.deposit(500)
contacorrente1.sacar(valor)
contapoupa1.sacar(10)
// console.log("\n", contacorrente1," \n\n", contacorrente2, " \n");
console.log(contacorrente1)
console.log(contapoupa1)