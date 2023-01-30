const cliente = {
    nome: "Rodrigo",
    idade: 24,
    cpf: "111222333",
    email: "rodrigo@email.com",
};

console.log(`O nome do cliente é ${cliente["nome"]} e essa pessoa tem ${cliente["idade"]} anos`);

//Substring usado para retirar uma parte especifica da string

console.log(`Os 3 primeiros digitos do CPF são ${cliente.cpf.substring(0, 3)}`);