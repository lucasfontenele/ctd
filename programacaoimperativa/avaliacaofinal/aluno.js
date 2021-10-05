function CriarAluno(nome, quantidadeDeFalta, notas) {
    this.nome = nome;
    this.quantidadeDeFalta = quantidadeDeFalta;
    this.notas = notas;
    this.calcularMedia = function(){
        return this.notas.reduce((a, b) => a + b) / this.notas.length
    };
    this.acrescentarFalta = function(){
        return this.quantidadeDeFalta++
    };
}


module.exports = CriarAluno;