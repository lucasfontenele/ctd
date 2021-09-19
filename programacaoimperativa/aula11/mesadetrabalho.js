//1.
let filmes = ['star wars', 'matrix', 'robot', 'o preço do amanhã', 'a vida é bela'];

function converterMaisculas(array){

    for (i = 0; i < array.length; i++) {
        array[i] = array[i].toUpperCase();

    }

    return array;
}

console.log(converterMaisculas(filmes));

//2.
let animacoes = ['toy story', 'finding nemo', 'kung-fu panda', 'wally']

function passarElementos(array1, array2) {

    for (i = 0; i < array2.length; i++) {
        array1.push(array2[i].toUpperCase())

    }

    return array1

}

console.log(passarElementos(filmes, animacoes))

//3.
const asiaScores = [8, 10, 6, 9, 10, 6, 6, 8, 4]
const euroScores = [8, 10, 6, 8, 10, 6, 7, 9, 5]

function scores(asia, europa) {
    let resultadoComparacoes = []

    for (i = 0; i < asia.length; i++) {
        resultadoComparacoes[i] = asia[i] === europa[i] ? 'Nota ' + asia[i] + ' da Ásia é igual' + ' a Nota ' + europa[i] + ' da Europa' : 'Nota ' + asia[i] + ' da Ásia é diferente ' + 'da Nota ' + europa[i] + ' da Europa'

    }

    return resultadoComparacoes

}

console.log(scores(asiaScores, euroScores))
