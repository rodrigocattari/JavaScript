const cliente = {
    nome: "joão",
    idade: 24,
    email: "joao@firma.com",
    telefone: ["11555550", "11144440"],
    saldo: 200,
    efetuaPagamento: function(valor){
        if(valor > this.saldo){
            console.log("Saldo insuficiente");
        }
        else{
            this.saldo -= valor;
            console.log(`Pagamento realizado. Novo saldo: ${this.saldo}`);
        }
    },
};

cliente.efetuaPagamento(199);
console.log(cliente);