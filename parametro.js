//Paramentro de Função
function soma(numero1, numero2){
    return numero1+numero2;
} 

console.log(soma(2, 2));

// parametros x argumentos

// ordem dos parametros

function nomeIdade(nome, idade){
    return `meu nome é ${nome} e minha idade é ${idade}`;
}

console.log(nomeIdade("Rodrigo", 24));

function multiplica(numero1, numero2){
    return numero1 * numero2;
}

console.log(multiplica(soma(4, 5), soma(3, 3)));