const somar1 = numero => console.log("Recebi o número: " + numero);

somar1(10);

const somar2 = (numeroA, numeroB) => {
    console.log("Recebi o número: " + numeroA);
    return numeroA + numeroB
}

console.log(somar2(20,30));

//Micro Desafios

let print = mensagem => console.log(mensagem);

print("Olá mundo!");

let soma = (n1, n2) => n1 + n2

console.log(soma(2,2));