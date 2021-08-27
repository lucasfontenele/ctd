function microondas(comida,segundos){
    switch(comida){
        case "Pipoca":
        tempoPadrao = 10;
        break
        case "Macarrão":
        tempoPadrao = 8;
        break
        case "Carne":
        tempoPadrao = 15;
        break
        case "Feijão":
        tempoPadrao = 12;
        break
        case "Brigadeiro":
        tempoPadrao = 8;
        break
        default:
            return console.log("Prato inexistente!");
        }

    if(segundos > tempoPadrao*2 && segundos <= tempoPadrao*3){
        return console.log("A comida queimou! :(");
    }
    else if(segundos>tempoPadrao*3){
        return console.log("KABUUUUUUUUUUM!");
    }
    else if(segundos<tempoPadrao){
        return console.log("Tempo Insuficiente");
    }
    else if(segundos=tempoPadrao){
        return console.log("Prato pronto, bom apetite!");
    }
}

microondas("Pipoca", 8)
