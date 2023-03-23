class Produto{

    // Usamos a notacao #nome_do_atributo para deixar um atributo privado
    #nome;
    #preco;
    #estoque_quant;
    #data_validade;
    #marca;
    #categoria;

    constructor(nome, preco, estoque_quant, data_validade, marca, categoria){

        this.#nome = nome;
        this.#preco = preco;
        this.#estoque_quant = estoque_quant; 
        this.#data_validade = data_validade;
        this.#marca = marca;
        this.#categoria = categoria;
    }

    // Getters
    getNome(){
        return this.#nome;
    }

    getPreco(){
        return this.#preco;
    }

    getEstoque_quant(){
        return this.#estoque_quant;
    }

    getData_validade(){
        return this.#data_validade;
    }

    getMarca(){
        return this.#marca;
    }

    getCategoria(){
        return this.#categoria;
    }

    verificarValidade(){
        /**
         * Compara o atributo data_validade do objeto Produto com a data atual do sistema.
         * Caso a data de validade seja maior que a data de hoje (ou seja, o produto nao esta vencido) retorna false.
         * Senão, caso a data de validade seja menor ou igual a data de hoje (isto eh, produto vencido) retorna true.
         */
        let today = new Date();
        
        return today >= this.#data_validade;
    }

    estaEmEstoque(){
        /**
         * Verifica a disponibilidade de um produto no estoque.
         * Retorna true para caso o estoque seja maior que 0 e false para caso o estoque seja menor ou igual a 0;
         */
        return this.#estoque_quant > 0;
    }

    compararPreco(produto){
        /**
         * Recebe outro produto como parametro e compara o preco dos dois. Imprime na tela se o produto eh mais
         * barato, mais caro ou de igual valor ao produto recbido como parametro.
         */
        if (this.#preco > produto.getPreco()){
            console.log(`O produto ${this.#nome} esta mais caro que o produto ${produto.getNome()}`);

        }else if (this.#preco < produto.getPreco()){
            console.log(`O produto ${this.#nome} esta mais barato que o produto ${produto.getNome()}`);

        }else{
            console.log(`O produto ${this.#nome} tem o mesmo preco que o produto ${produto.getNome()}`);
        }
    }

}

let data = new Date(2023, 2, 20);
const produto_1 = new Produto('Queijo', 30, 0, data, 'Rezende', 'Laticinios');
const produto_2 = new Produto('Pipoca', 2.5, 6, data, 'Yoki', 'Graos');

// Verificamos se o produto esta dentro da data de validade
if (produto_1.verificarValidade()){
    console.log(`O produto ${produto_1.getNome()} esta vencido.`);
}else{
    console.log(`O produto ${produto_1.getNome()} esta dentro do prazo de validade.`);
}

// Verificamos se ainda ha estoque do produto
if(!produto_1.estaEmEstoque()){
    console.log(`Eh necessario repor o produto ${produto_1.getNome()} !!`)
}

// Comparamos o preco de dois produtos
produto_1.compararPreco(produto_2);
