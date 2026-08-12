const Pessoa = require("./Pessoa");

class Cliente extends Pessoa {
  #pontosFidelidade;
  constructor(nome, email, pontosFidelidade) {
    super(nome, email, pontosFidelidade);
    this.#pontosFidelidade = pontosFidelidade;
  }
  get pontosFidelidade() {
    return this.#pontosFidelidade;
  }
  apresentar() {
    // LACUNA 2 → chame a versao original de apresentar() antes de acrescentar o restan

    console.log("Tipo: Cliente");
    console.log("Pontos: " + this.#pontosFidelidade);
  }
}
module.exports = Cliente;
