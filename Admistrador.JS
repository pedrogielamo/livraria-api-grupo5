const Pessoa = require("./Pessoa");

class Cliente extends Pessoa {
  #pontosFidelidade;

  constructor(nome, email, pontosFidelidade) {
    super(nome, email);
    this.#pontosFidelidade = pontosFidelidade;
  }

  get pontosFidelidade() {
    return this.#pontosFidelidade;
  }

  
  calcularDesconto() {
    return this.#pontosFidelidade > 100 ? 10 : 0;
  }

  apresentar() {
    super.apresentar();
    console.log("Tipo: Cliente");
    console.log("Pontos: " + this.#pontosFidelidade);
    console.log("Desconto: " + this.calcularDesconto() + "%");
  }
}

module.exports = Cliente;