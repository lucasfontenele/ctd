let pais = {
    nome: "Brasil",
    capital: "Brasília",
    nacionalidade: function(){
        return "Eu nasci no " + this.nome
    }
}

console.log(pais.nacionalidade());

let carro = {
    marca: "Fiat",
    modelo: "Uno",
};

function Carro(valorMarca, valorModelo) {
    this.marca = valorMarca;
    this.modelo = valorModelo;
};

console.log(carro);

console.log(new Carro("Nissan", "March"));