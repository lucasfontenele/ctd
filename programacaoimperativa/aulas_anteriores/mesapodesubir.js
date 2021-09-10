// let alt = 1.21

// let acom = 1

// if (alt>=1.40 && alt<2.00){
//     console.log("Acesso autorizado");
// }
// else if((alt<1.40 && alt<1.19) && acom>0){
//     console.log("Acesso autorizado somente com acompanhante");
// }
// else if(alt<1.20){
//     console.log("Acesso negado");
// }
// else{
//     console.log("Acesso negado");
// }

function podeSubir(altura, acompanhante) {
    if (altura >= 1.4 && altura < 2.0) {
      return console.log('Acesso autorizado')
    } else if (altura >= 1.2 && altura < 1.4 && acompanhante == true) {
      return console.log('Acesso autorizado com acompanhante')
    } else if (altura < 1.2) {
      return console.log('Acesso negado por ter menos de 1.20')
    } else {
      return console.log('Acesso negado por outros motivos')
    }
  }
  
  podeSubir(1.5, true)
  