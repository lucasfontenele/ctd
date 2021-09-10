//1.
function senhaValida(senha){
    if(senha===1234){
        return console.log("ACESSO PERMITIDO.");
    }
    else{
        console.log("ACESSO NEGADO.");
    }
}

senhaValida(1235)

//2.  
function maiorMenor(x,y){
    if(x>y){
        return console.log(x+" é maior que "+y+".");
    }
    else if(x<y){
        return console.log(x+" é menor que "+y+".");
    }
    else if(x=y){
        return console.log(x+" é igual que "+y+".");
    }
}

maiorMenor (3,3)

//3.

function verificarMes (mes){
switch (mes){
    case 1:
        console.log("Janeiro");
    break
    case 2:
        console.log("Fevereiro");
    break
    case 3:
        console.log("Março");
    break
    case 4:
        console.log("Abril");
    break
    case 5:
        console.log("Maio");
    break
    case 6:
        console.log("Junho");
    break
    case 7:
        console.log("Julho");
    break
    case 8:
        console.log("Agosto");
    break
    case 9:
        console.log("Setembro");
    break
    case 10:
        console.log("Outubro");
    break
    case 11:
        console.log("Novembro");
    break
    case 12:
        console.log("Dezembro");
    break
}}


verificarMes (15)

//4.
function verificarSenha2(senha2){
   return senha2===1234 ? console.log("ACESSO PERMITIDO.") : console.log("ACESSO NEGADO.");
}

verificarSenha2(1234)
