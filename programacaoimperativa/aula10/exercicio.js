//Array Invertido

 function matrizInverso(array) {
    saida1 = array.pop()
    saida2 = array.pop()
    saida3 = array.pop()
    saida4 = array.pop()
    
    array.push(saida1)
    array.push(saida2)
    array.push(saida3)
    array.push(saida4)

    console.log(array)
}

matrizInverso([1, 2, 3, 4]);

//somarArray()

function somarArray(array) {
    return array[0] + array[1] + array[2]

}

console.log(somarArray([2, 2, 2]))

//Simulação Array.join()

function join(array){
    str = array.shift() + array.shift() + array.shift() + array.shift() + array.shift()
    console.log(str)}

console.log(join(["l", "u", "c", "a", "s"]));



//Coleção de Filmes

//1.
var colecao = ['Star wars', 'Matrix', 'Mr. Robot', 'O Preço do Amanhã', 'A Vida é Bela']

//2.

 function upperCase(array) {
    array.push(array.shift().toUpperCase())
    array.push(array.shift().toUpperCase())
    array.push(array.shift().toUpperCase())
    array.push(array.shift().toUpperCase()) 
    array.push(array.shift().toUpperCase()) 

    console.log(array)}

upperCase(colecao)

//3.

let animacoes = ['Toy Story', 'Finding Nemo', 'Kung-fu Panda', 'Wally', 'Fortnite']

 function retornar(arr1, arr2) {
    arr1.push(arr2[0], arr2[1], arr2[2], arr2[3], arr2[4])
    console.log(arr1)}

retornar(colecao, animacoes)

//4.

colecao.pop()
console.log(colecao)

//5.

const asiaScores = [8, 10, 6, 9, 10, 6, 6, 8, 4]
const euroScores = [8, 10, 6, 8, 10, 6, 7, 9, 5]

function compara(asiaScores, euroScores) {
    asiaScores[0] === euroScores[0] ? console.log('São iguais') : console.log('São diferentes')
    asiaScores[1] === euroScores[1] ? console.log('São iguais') : console.log('São diferentes')
    asiaScores[2] === euroScores[2] ? console.log('São iguais') : console.log('São diferentes')
    asiaScores[3] === euroScores[3] ? console.log('São iguais') : console.log('São diferentes')
    asiaScores[4] === euroScores[4] ? console.log('São iguais') : console.log('São diferentes')
    asiaScores[5] === euroScores[5] ? console.log('São iguais') : console.log('São diferentes')
    asiaScores[6] === euroScores[6] ? console.log('São iguais') : console.log('São diferentes')
    asiaScores[7] === euroScores[7] ? console.log('São iguais') : console.log('São diferentes')
    asiaScores[8] === euroScores[8] ? console.log('São iguais') : console.log('São diferentes')

}

compara(asiaScores, euroScores)
