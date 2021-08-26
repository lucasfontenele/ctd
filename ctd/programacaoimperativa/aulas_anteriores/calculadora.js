// Aluno: Lucas Fontenele, Wesley Lukbe
// Calculadora - Nível I

function adicionar (x,y) {
    return x + y
}

function subtração (x,y) {
    return x - y
}

function multiplicação (x,y) {
    return x * y
}

function divisão (x,y) {
    return x / y
}


// Calculadora - Nível II
console.log ("-------------- Teste de Operações / Calculadora II --------------")

console.log(adicionar(3, 5));
console.log(subtração(3,5));
console.log(multiplicação(3,5));
console.log(divisão(0,3));

// Calculadora - Nível III

function quadradoDoNumero(x) {
    return multiplicação(x,x)
}

function mediaDeTresNumeros(x,y,z) {
    return divisão((x+y+z),3)
}

function calculaPorcentagem(x,y) {
    return multiplicação(x,(divisão(y,100))) + "%";
}

function geradorDePorcentagem (x,y) {
    return divisão((multiplicação(x,100)),y) + "%";
}

console.log ("-------------- Teste de Operações / Calculadora III --------------")

console.log(quadradoDoNumero(3));
console.log(mediaDeTresNumeros(3,4,6));
console.log(calculaPorcentagem(100,20));
console.log(geradorDePorcentagem(1,100));
