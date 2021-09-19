let pessoa = {
    nome: "Lucas",
    idade: 24,
    altura: 1.86,
};

//         Converte na linguagem JSON
let json = JSON.stringify(pessoa);

//              Retorna em JavaScript
let objetoNovo = JSON.parse(json);

console.log(json);

console.log(objetoNovo);

console.log("-------------------");

let comida = ["xuxu", "chiclete", "bacon"]

let jsonn = JSON.stringify(comida)

console.log(jsonn);

