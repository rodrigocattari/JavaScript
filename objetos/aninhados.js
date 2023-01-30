const cliente = {
    nome: "joão",
    idade: 24,
    email: "joao@firma.com",
    telefone: ["11555550", "11144440"],
};

cliente.endereco={
    rua: "R. joseph Climber",
    numero: 1337,
    apartamento: true,
    complemento: "ap 934",
};

console.log(cliente);
console.log(cliente.endereco)
console.log(cliente["endereco"]) // Mesmo resultado do cliente.endereco

