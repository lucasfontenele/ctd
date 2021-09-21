//.map()
let numeros = [2, 4, 6];

let dobro = numeros.map(function(num){
    return num*2;
});

console.log(dobro);

//.filter()
let idades = [22, 8, 17, 14, 30];

let maiores = idades.filter(function(idade){
    return idade > 18;
})

console.log(maiores);

//.reduce()
let soma = numeros.reduce(function (acumulador, numero){
    return acumulador + numero;
})

console.log(soma);

//.forEach()
let paises = ["Brasil", "Cuba", "Venezuela"];

paises.forEach(function(pais){
    console.log(pais);
})