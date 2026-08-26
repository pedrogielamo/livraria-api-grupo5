const Pessoa = require("./Pessoa");

class Cliente extends Pessoa {
  #pontosFidelidade;

  constructor(nome, email, pontosFidelidade) {
    // LACUNA 1 → chama o constructor da classe-mãe, passando nome e email
    super(nome, email);

    this.#pontosFidelidade = pontosFidelidade;
  }

  get pontosFidelidade() {
    return this.#pontosFidelidade;
  }

  apresentar() {
    // LACUNA 2 → chama a versão original de apresentar() antes de acrescentar o restante
    super.apresentar();

    console.log("Tipo: Cliente");
    console.log("Pontos: " + this.#pontosFidelidade);
  }
}

module.exports = Cliente;