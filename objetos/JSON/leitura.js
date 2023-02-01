const dados = require("./clientes.json");

// console.log(dados);
// console.log(typeof dados); 

const clienteEmString = JSON.stringify(dados); //similar ao toString

// console.log(clienteEmString);
// console.log(typeof clienteEmString); 

const objetoCliente = JSON.parse(clienteEmString);
console.log(objetoCliente);