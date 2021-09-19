const fs = require("fs");

let dados = fs.readFileSync(__dirname + "/dados.txt", "utf-8")

console.log(dados);

const nome = require("./nome")

console.log(nome);