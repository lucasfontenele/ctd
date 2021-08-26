// If and else if

let dia = "domingo";

if(dia == "domingo"){
    console.log("Vou para praia!");
} 

else if(dia == "sexta"){
    console.log("Vou ao cinema.");
}

else if(dia == "segunda"){
    console.log("Vou tomar um café.");
}

else{
    console.log("Vou ficar em casa.");
}



// IF ternario

let peso = 10 ? 10 : "dez"

console.log(peso);

// Switch

switch (dia){
    case "segunda":
        console.log("Vou Dormir...");
    break
    case "terça":
        console.log("Vou jogar!");
    break
    case "quarta":
        console.log("Vou para academia!");
    break
    case "quinta":
        console.log("Vou correr!");
    break
    case "sexta":
        console.log("Vou para Igreja");
    default:
        console.log("AAAAAAAAAAH!");
}