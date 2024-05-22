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


// Encapsulamento:

// O encapsulamento é o conceito de esconder os detalhes de implementação de um objeto e exibir apenas as informações necessárias.
// Em TypeScript, podemos usar modificadores de acesso como public, private e protected para controlar o acesso aos membros de uma classe.

    class ContaBancaria { 
        private saldo: number;

        constructor(saldoInicial: number) {
            this.saldo = saldoInicial;
        }

        depositar(valor: number) {
            this.saldo += valor;
        }

        sacar(valor: number) {
            if (valor <= this.saldo) {
                this.saldo -= valor;
                console.log(`Saque de ${valor} realizado. Saldo restante: ${this.saldo}`);
            } else {
                console.log("Saldo insuficiente.");
            }
        }
    }

    let minhaConta = new ContaBancaria(1000);
    minhaConta.depositar(500);
    minhaConta.sacar(200);

//     Herança:

// Herança é um mecanismo que permite que uma classe herde propriedades e métodos de outra classe.
// A classe que herda é chamada de classe filha (ou subclasse), e a classe da qual ela herda é chamada de classe pai (ou superclasse).

class Animal {
    nome: string;

    constructor(nome: string) {
        this.nome = nome;
    }

    fazerBarulho() {
        console.log("Barulho genérico de animal");
    }
}

class Cachorro extends Animal {
    fazerBarulho() {
        console.log("Au Au!");
    }
}

let meuCachorro = new Cachorro("Rex");
console.log(meuCachorro.nome); // Saída: Rex
meuCachorro.fazerBarulho(); // Saída: Au Au!
