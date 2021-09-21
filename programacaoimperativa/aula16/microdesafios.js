//Micro Desafios

// Crie um array de números pares, e utilizando a função .map() nesse array, crie um novo array com apenas números ímpares.

let numerospares = [2, 4, 6, 8];

let transformImpares = numerospares.map(function(num){
    return num + 1;
});

console.log(transformImpares);

// Crie um array de nomes, que possua dois índices com o nome Maria. Utilize o .filter() para obter apenas esses dois índices com o nome Maria.

let nomes = ["Maria", "João", "Lucas", "Carlos", "Maria", "Renato"];

let filter = nomes.filter(function(maria){
    return maria == "Maria";
})

console.log(filter);

// Crie um array de números e utilize a função .reduce() para devolver uma string com os números formatados.

let numeros = [1, 5, 9, 3, 7];

let formatados = numeros.reduce(function(num1, num2){
    return num1 + " - " + num2
})

console.log(formatados);

// Crie um array de animais, após isso passe por cada índice utilizando o .forEach() e imprima a frase “O animal é NOME_DO_ANIMAL”.

let animais = ["Jacaré", "Gorila", "Leão", "Urso"];

animais.forEach(function(nome_animal){
    console.log("O animal é " + nome_animal + ".");
});
