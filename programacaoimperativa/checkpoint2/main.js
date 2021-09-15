//1.
function soma (a=1, b=3){
    return a+b
}

console.log(soma());
console.log(soma(3));
console.log(soma(1,2));
//R: 4,6,3.

//2.
//R: + === ! &&

//3.
let numeros= [10, 8, 7, 99, 0, 1, 6]

console.log(numeros.sort(function(a,b){ return b-a;}));
//R: numeros.sort(function(a,b){ return b-a;});

//4.
var z = 0;

for (var i = 20; i<50; i += 10){
    z+=i;
}

console.log(z);
//R: 90

//5.
//R: O operador ++ incrementa 1, o operador -- decrementa 1, o operador % calcula o resto, o operador + concatena ou soma

//6.
//R: Significar um objeto criado usando uma função construtora particular.

//Sem número.
let frutasAmarelas = ["Melão", "Mamão", "Limão Siliciano"];
let frutasVermelhas = ["Morango", "Cereja", "Maça Red"];
let frutasVerdes = ["Limão", "Kiwi", "Maça Verde"];

frutasVermelhas1 = frutasVermelhas.map(fruta => fruta.toUpperCase())
console.log(frutasVermelhas1); 

let todasFrutas = [...frutasAmarelas, ...frutasVermelhas1, ...frutasVerdes];
console.log(todasFrutas);

//R:
// Linhas 1, 2 e 3: São três let's que recebem uma array, onde são divididas pelas cores da frutas.
// Linha 5: Apresenta a array de frutas vermelhas em caixa alta, para aparececer no terminal é necessário colocar o console.log(frutasVermelhas1); 
// Linha 6: Cria uma nova array, contendo em cada objeto as let's declaradas anteriormente. Vale ressaltar que foi usada a frutasVermelhas1, isto é, em caixa alta.
// Linha 7: Executa no terminal a array criada na linha 6.

//6.
//readFileSync() - traz o pacote nativo e nos permite recuperar dados.
//writeFileSync() - traz o pacote nativo e nos permite escrever arquivos.
//appendFileSync() - traz o pacote nativo e nos permite adicionar conteúdo a arquivos.

//7.
let valor = 5;
let fatorial = 1;
for (let i = valor; i > 1; i--) {
    fatorial *=i;
}
console.log("Fatorial = " + fatorial);
// R:120.

//8. 
//R: Ler um arquivo, adicionar conteúdo ao já existente, transformar dados Json em objetos literais, adicionar conteúdo substituindo o já existente.

//9.
//R: São funções que ficam aninhadas.

//10.
let frutasAmarelas = ["Melão", "Mamão", "Limão"]
let [fruta1, fruta2, fruta3] = frutasAmarelas
console.log(fruta1);
console.log(fruta2);
console.log(fruta3);
console.log(frutasAmarelas);

//R: Melão, Mamão e Limão, conceito: desestruturação

//11.
let x = 5;
let y = x++ + ++x;

console.log("y = " + y);

x = 3;
y = x*(x + 1)*x++;
x = 5;
y = 3;
y *= x + 1;

console.log("x = " + x);
console.log("y = " + y);

//R: 12, 5 e 18

//14. 
let x = 1;

if (x>2) {
    console.log(x +2);
}

//R: Não acontece nada?

//15.
for (var i = 0; i<50; i+=10){
    console.log(i);
}

console.log(i);

//R: 0 10 20 30 40 50

//17. 
//R: if ternário.

//18.
function soletrar(texto){
    console.log(texto.replace("-", "").toLocaleUpperCase().split("").join("-"));
}
soletrar("digital-house")
soletrar("ctd")
//R: Substitui cada hífen por '', transforma o texto em letras maiúsculas, transforma a string em array, junta o array com o separador hífen

//19.
//R: O Node é um interpretador da linguagem Javascript, de código aberto, que possibilita a execução de códigos da linguagem do lado do servidor.

//20.
//R: Node Package Manager