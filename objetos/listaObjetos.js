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

cliente.endereco.push({
    rua:"R. joseph ladder",
    numero: 404,
    apartamento: false,
});

const listaApenasApartamentos = cliente.endereco.filter(
    (endereco) => endereco.apartamento === true
);

console.log(listaApenasApartamentos)