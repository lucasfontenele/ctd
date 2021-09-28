// Grupo 02
// Alunos: Júlio Roncal, Marcos Pires, Lucas Fontenele e Lucas Rosa.

function pessoa(nome, sexo, altura) {
    this.nome = nome;
    this.sexo = sexo;
    this.altura = altura;
}

let pessoa1 = new pessoa("João", "M", 1.87);
let pessoa2 = new pessoa("Lucas", "M", 1.78);
let pessoa3 = new pessoa("José", "M", 1.79);
let pessoa4 = new pessoa("Júlio", "M", 1.56);
let pessoa5 = new pessoa("Marcos", "M", 1.78);
let pessoa6 = new pessoa("Rodrigo", "M", 1.98);
let pessoa7 = new pessoa("Victor", "M", 1.76);
let pessoa8 = new pessoa("Leonardo", "M", 1.45);
let pessoa9 = new pessoa("Carlos", "M", 1.89);
let pessoa10 = new pessoa("Carla", "F", 1.48);
let pessoa11 = new pessoa("Letícia", "F", 1.57);
let pessoa12 = new pessoa("Larissa", "F", 1.69);
let pessoa13 = new pessoa("Joana", "F", 1.76);
let pessoa14 = new pessoa("Júlia", "F", 1.56);
let pessoa15 = new pessoa("Janaína", "F", 1.82);


const pessoas = [pessoa1, pessoa2, pessoa3, pessoa4, pessoa5, pessoa6, pessoa7, pessoa8, pessoa9, pessoa10, pessoa11, pessoa12, pessoa13, pessoa14, pessoa15];

//

console.log("Qt. Total: ", pessoas.length);

//

const homens = pessoas.filter((dado) => dado.sexo === "M");

console.log("Qt. homens: ", homens.length);

//

const mulheres = pessoas.filter((dado) => dado.sexo === "F");

console.log("Qt. homens: ", mulheres.length);

//

const alturaTotalHomens = homens.reduce((grupo, homem) => {
    return grupo + homem.altura;
}, 0);

console.log("A média da altura dos homens é:", alturaTotalHomens/homens.length);

//

const alturaTotalMulheres = mulheres.reduce((grupo, mulher) => {
    return grupo + mulher.altura;
}, 0);

console.log("A média da altura das mulheres é:", alturaTotalMulheres/mulheres.length);

//

