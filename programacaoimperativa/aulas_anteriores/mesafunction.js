// Grupo 3 - Programação Imperativa
// Diego Reis, Lucas Fontenele, Julia Roncal e Samir Libos


// 1. Crie uma função que converta polegadas em centímetros. 
function polegadasParaCentimetros (n) {
    return n * 2.54;
}
console.log(polegadasParaCentimetros(5));

// 2. Recebe pelo parâmetro polegadas e retorna seu equivalente em centímetros.
function centimetrosParaPolegadas (n) {
    return 0,393701 * n;
}
console.log(centimetrosParaPolegadas(5));

// 3. Crie uma função que receba uma string e a converta em um URL.
function convertaEmUrl (s) {
return "http://www." + s + ".com.br";
}
console.log(convertaEmUrl ("lucas"));

// 4. Crie uma função que recebe uma string e retorna a mesma frase, mas com o caracter de exclamação ( ! ).
function recebeEx (s) {
    return s + "!";
}
console.log( recebeEx ("Lucas é legal"));

// 5. Crie uma função que calcule a idade dos cachorros, considerando que 1 ano humano, equivale a 7 anos para eles.
function idadeCachorro (x) {
    return x * 7;
}
console.log(idadeCachorro (10)+" anos");

// 6. Crie uma função que calcule o valor da sua hora de trabalho, tendo como parâmetro o seu salário mensal.
function valorHora (s) {
    return "R$ " + s / 160;
}
console.log(valorHora(1100));

// 7. Crie a função calculadora de IMC* de uma pessoa, que recebe a altura em centímetros e o peso em quilogramas. Em seguida, execute a função, testando diferentes valores.
function calcImc (peso, altura) {
    return peso / altura**2
}
console.log(calcImc (110, 1.85));

// Extra. Crie uma função que receba uma string em minúsculas, converta-a em maiúsculas e as retorne.
function retornaMais (s) {
    return (s.toUpperCase());
}
console.log(retornaMais("lucas"));

// Extra. Crie uma função que receba um parâmetro e retorne o tipo de dado deste parâmetro.
function retornaParametro (s) {
    return typeof s;
}
console.log(retornaParametro("lucas"));
console.log(retornaParametro(13));
console.log(retornaParametro(true));

// Extra. Crie uma função pela qual passamos o raio de um círculo e ela retorna a circunferência.
//C = 2 * π * r.
function retornaCircunferencia (r) {
    return 2 * Math.PI * r
}
console.log(retornaCircunferencia(3));

// Número aleatório de 0 à 1.
console.log(Math.random());

// Função para cumprimentar:
function cumprimentarNome (s) {
    const mensagem = "Olá, Seja bem vindo(a) "
    return mensagem + s + "!"
}
console.log(cumprimentarNome("Lucas"));
console.log(cumprimentarNome("Laisy"));
console.log(cumprimentarNome("Andrea"));