let produtos = ["Carne", "Frango", "Pão", "Queijo"];

//join
//Junta os elementos de um array, recebe como parâmetro o separador que especificamos.
console.log(produtos.join());

//pop
//Não recebe parâmetro e retorna o ultimo elemento eliminado.
//No caso retorna QUEIJO.
console.log(produtos.pop());

//push
// Acrescenta item no final da array.
produtos.push("Queijo", "Presunto");
console.log(produtos);

//shift
//Não recebe parâmetro e elimina o primeiro elemento de uma array.
//No caso elimina a CARNE.
produtos.shift();
console.log(produtos);

//unshift
//Acrescente item no início da array.
produtos.unshift("Carne");
console.log(produtos);