// Classes e Objetos:

// Uma classe é um modelo para criar objetos. Ela define as propriedades e métodos que os objetos desse tipo terão.
// Um objeto é uma instância de uma classe, ou seja, é uma entidade que possui características específicas conforme definido pela classe.


class Pessoa { // classe
  nome: string;
  idade: number;

  constructor(nome: string, idade: number) {
      this.nome = nome;
      this.idade = idade;
  }

  andar() { // metodo 
      console.log("Pessoa andando");
  }

  falar() { // metodo
      console.log("Pessoa falando");
  }
}

let pessoa1 = new Pessoa("Eduardo", 20);
pessoa1.andar(); // Pessoa andando
console.log(pessoa1.nome); // Eduardo