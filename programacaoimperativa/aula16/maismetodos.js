//.slice() - retorna uma cópia do array

let numeros = [1, 2, 3, 4, 5];
//                    (início, fim)
let slice = numeros.slice(0, 3)

console.log(slice);

//.splice() - remove ou adiciona elementos do array

// numeros.splice(0, 0, 0);

// console.log(numeros);

// numeros.splice(3,2)

// console.log(numeros);


//.sort() - ordena os elementos da array

let atrizes = ["Xuxa", "Cléo Pires", "Ana Maria Braga"];

console.log(atrizes.sort());

//.flat() - desembrulhar subarrays

let flat = [1, 2, 3, [4, 5], [6, 7, 8], 9, [10, 11]];

console.log(flat.flat());

//.includes() - verifica a existencia de uma array e retorna um booleano

let num = [1, 2, 3, 4];
//      (valor a ser procurado, índice na qual se iniciará a busca)
console.log(num.includes(1, 0));

//.find() - retorna o primeiro valor que cumpre a condicão especificada
let carros = [
    {nome: "Pálio", marca: "FIAT"},
    {nome: "Uno", marca: "FIAT"},
    {nome: "Celta", marca: "GM"},
];

let find = carros.find(function(carro){
    return carro.marca == "FIAT"
})

console.log(find);