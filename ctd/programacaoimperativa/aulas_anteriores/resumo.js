// // *** ATRIBUIÇÕES

// // String = "Nomes"
// // Number = Número
// // Boolean = true/false

// // // O operador "=" serve para atribuir o valor 40 a uma variável chamada idade.

let idade = 40

// // // Vale ressaltar que a variavél let pode ser declarada somente uma vez diferente da variável var.


// // *** ARITMÉTICOS

// // // Permite realizar operações matemáticas

console.log("// Soma =>", 10+15);
console.log("// Subtração =>", 10-15);
console.log("// Multiplicação =>", 0*15);
console.log("// Divisão =>", 10/15);
console.log("// Resto =>", 15%5);
console.log("// Incrementar =>", ++idade);
console.log("// Diminuir =>", --idade);

// *** LOGÍCO

// == Igualdade
// != Desigualdade
// === Igualdade estrita
// !== Desigualdade estrita
// <, >, <=, >= Maior e Menor(Possibilidade de igualdade)
// && AND - Permite combinar valores
// || OR - Apenas um valor deve ser avaliado como true para que o resultado seja true


// Os seguintes valores são sempre falsy:

// false
// 0 (zero)
// ‘’ ou “” (string vazia)
// null
// undefined
// NaN (Ex: o resultado de 1/0)

// truthy, o que inclui:
// ‘0’ (uma string que contenha um simples 0)
// ‘false’ (uma string que contenha o texto “false”)
// [] (un array vazio)*
// {} (um objeto vazio)*
// function(){} (uma função vazia)


if (condicao){
    // código a executar se a execução for verdadeira.
}

else if(condicao){
    // leva uma condição diferente e executa o código caso a condição seja chamda.
    // Pode ser usado inúmeras vezes.
}

else{
    // determina o que acontecerá caso a execução séja falsa.
    // Só pode ser usado UMA vez.
}

valor ? x : y //if ternario
//      V   F

// Switch ---> OPÇÕES, ESCOLHAS.
switch (expressao) {
    case caso1:
        console.log();
    break
}
