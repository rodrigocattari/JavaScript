const cliente = {
    nome: "joão",
    idade: 24,
    email: "joao@firma.com",
    telefone: ["11555550", "11144440"],
};

cliente.endereco=[{
    rua: "R. joseph Climber",
    numero: 1337,
    apartamento: true,
    complemento: "ap 934",
}];

function ligaParaCliente(telefoneComercial, telefoneResidencial){
    console.log(`Ligando para ${telefoneComercial}`)
    console.log(`Ligando para ${telefoneResidencial}`)
}

ligaParaCliente(...cliente.telefone)