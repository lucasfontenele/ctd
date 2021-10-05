const CriarAluno = require("./aluno");
const alunos = require("./estudante");


let curso = {
    nomeDoCurso: "Filosofia",
    notaDeAprovacao: 7,
    faltasMaximas: 3,
    listaDeEstudantes: alunos,
    adicionarEstudante(aluno) {
        this.listaDeEstudantes.push(aluno)
    },
    verificarAprovacao(aluno) {
        if(aluno.calcularMedia() >= this.notaDeAprovacao && aluno.quantidadeDeFalta < this.faltasMaximas) {
            return true;
        } else if (aluno.quantidadeDeFalta == this.faltasMaximas && aluno.calcularMedia() >= this.notaDeAprovacao*0.10) {
            return true
        } else {
            return false
        }
    },
    resultado(alunos){
        let listaResultado = [];
        alunos.forEach( aluno => {
        listaResultado.push("Aluno " + aluno.nome + " foi aprovado " + this.verificarAprovacao(aluno))
        });
        return listaResultado
    },
};

curso.adicionarEstudante(new CriarAluno("Zezinho", 3, [8, 9, 10, 7]))

console.log(curso.listaDeEstudantes);

console.log(curso.verificarAprovacao(curso.listaDeEstudantes[0]));

console.log(curso.resultado(curso.listaDeEstudantes));