var Pessoa = /** @class */ (function () {
    function Pessoa(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
    Pessoa.prototype.andar = function () {
        console.log("Pessoa andando");
    };
    Pessoa.prototype.falar = function () {
        console.log("Pessoa falando");
    };
    return Pessoa;
}());
var usuario1 = new Pessoa("Eduardo", 20);
usuario1.andar();
console.log(usuario1.nome); // Eduardo
