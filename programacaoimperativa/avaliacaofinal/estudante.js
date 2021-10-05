const CriarAluno = require("./aluno");

const aluno1 = new CriarAluno("Joyce", 3, [7, 7, 8, 6]);
const aluno2 = new CriarAluno("Ketlen", 1, [4, 5, 7, 10]);
const aluno3 = new CriarAluno("João", 2, [8, 5, 9, 10]);
const aluno4 = new CriarAluno("Joana", 0, [6, 5, 9, 10]);

let alunos = [aluno1, aluno2, aluno3, aluno4];

console.log(aluno1.calcularMedia());

aluno2.acrescentarFalta()

console.log(aluno2.quantidadeDeFalta);

module.exports = alunos;