class Livro {
    #preco;
    #estoque;

    constructor(titulo, autor, preco, estoque, categoria) {
        this.titulo = titulo;
        this.autor = autor;
        this.#preco = preco;
        this.#estoque = estoque;
        this.categoria = categoria; // LACUNA 1
    }

    get preco() {
        return this.#preco;
    }

    get estoque() {
        return this.#estoque;
    }

    descrever() {
        console.log("Titulo: " + this.titulo);
        console.log("Autor: " + this.autor);
        console.log("Preco: R$ " + this.#preco);
        console.log("Categoria: " + this.categoria.nome); // LACUNA 2
    }

    valorEmEstoque() {
        return this.preco * this.estoque;
    }

    set preco(novoPreco) {
        if (novoPreco < 0) {
            console.log("ERRO!: Preco nao pode ser negativo, valor recusado!");
            return;
        }
        this.#preco = novoPreco;
    }
    toJSON() {
        return {
            titulo: this.titulo,
            autor: this.autor,
            preco: this.#preco,
            estoque: this.#estoque,
        };
    }
}

module.exports = Livro;