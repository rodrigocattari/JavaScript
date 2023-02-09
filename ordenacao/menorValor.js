//Verificando o livro mais barato

const livros = require('./listaLivros');

function menorValor(arrprodutos, posicaoInicial){

let maisBarato = posicaoInicial;

for(let atual = posicaoInicial; atual < arrprodutos.length; atual++){
    if(arrprodutos[atual].preco < arrprodutos[maisBarato].preco){
        maisBarato = atual;
    }
}
return maisBarato;

}

module.exports = menorValor
