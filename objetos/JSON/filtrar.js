// Filtrar as pessoas que vivem em apartamento e não passaram complemento

const clientes = require("./clientes.json");

function filtrarApartamentosSemComplementos(clientes){
    return clientes.filter((cliente) => {
        return (cliente.endereco.apartamento === true) && !cliente.endereco.hasOwnProperty("complemento");
    }); //hasOwnProperty - verifica se ele tem determidado item
}

const filtrados = filtrarApartamentosSemComplementos(clientes);

console.log(filtrados);