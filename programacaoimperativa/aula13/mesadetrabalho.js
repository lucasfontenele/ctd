//3.
function Conta(numero, tipo, saldo, titular){
    this.numero = numero;
    this.tipo = tipo;
    this.saldo = saldo;
    this.titular = titular;
}

var conta1 = (new Conta(5486273622, "Conta Corrente", 27771, "Abigael Natte"))
var conta2 = (new Conta(1183971869, "Conta Poupança", 8675, "Ramon Connell"))
var conta3 = (new Conta(9582019689, "Conta Poupança", 27363, "Jarret Lafuente"))
var conta4 = (new Conta(1761924656, "Conta Poupança", 32415, "Ansel Ardley"))
var conta5 = (new Conta(7401971607, "Conta Poupança", 18789, "Jacki Shurmer"))
var conta6 = (new Conta(630841470, "Conta Corrente", 28776, "Jobi Mawtus"))
var conta7 = (new Conta(4223508636, "Conta Corrente", 2177, "Thomasin Latour"))
var conta8 = (new Conta(185979521, "Conta Poupança", 25994, "Lonnie Verheijden"))
var conta9 = (new Conta(3151956165, "Conta Corrente", 7601, "Alonso Wannan"))
var conta10 = (new Conta(2138105881, "Conta Poupança", 33196, "Bendite Huggett"))

//4.
let contas = [conta1, conta2, conta3, conta4, conta5, conta6, conta7, conta8, conta9, conta10];

//5.
let banco = {
    clientes: contas,

    consultarCliente: function(cliente) {

        return console.log(this.clientes.includes(cliente) ? cliente : "Cliente não existe");

    },

    depositar: function(cliente, valor) {

        let novoSaldo = cliente.saldo += valor

        console.log("Depósito realizado! Seu novo saldo é de: " + novoSaldo);

    },

    sacar: function(cliente, valor) {

        let novoSaldo = cliente.saldo -= valor

        cliente.saldo > 0 ? console.log("Saque realizado! Seu novo saldo é de: " + novoSaldo) : console.log("Saldo insuficiente");

        ;

    }

}

banco.consultarCliente(conta1);
banco.depositar(conta1, 1);
banco.sacar(conta1, 1);