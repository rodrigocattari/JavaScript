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

for (let chave in cliente){
    let tipo = typeof cliente[campo];
    if(tipo !== 'object' && tipo !== "function"){
        console.log(`A chave ${chave} tem o valor ${chave}`);
    }
}