console.log("Essa é uma calculadora para calcular seu ranking, a seguir digite as informações do seu heroi")

const vitorias = parseInt(prompt("Por favor a quantidade de vitorias do seu heroi"));
const derrotas = parseInt(prompt("Por favor a quantidade de derrotas do seu heroi"));


function calcularRankes(vitorias, derrotas) {
    
    let calculoVitorias = vitorias - derrotas;
    let nivel = "";
    
    if (vitorias < 10) {
        nivel = "Ferro";
    } else if (vitorias >= 11 && vitorias <= 20) {
        nivel = "Bronze";
    } else if (vitorias >= 21 && vitorias <= 50) {
        nivel = "Prata";
    } else if (vitorias >= 51 && vitorias <= 80) {
        nivel = "Ouro";
    } else if (vitorias >= 81 && vitorias <= 90) {
        nivel = "Diamante";
    } else if (vitorias >= 91 && vitorias <= 100) {
        nivel = "Lendário";
    } else if (vitorias >= 101) {
        nivel = "Imortal";
    }

   
    return {
        saldo: calculoVitorias,
        nivel: nivel
    };
}


let resultado = calcularRankes(vitorias, derrotas);

console.log(`O heroi tem um saldo de ${resultado.saldo} e está no nível ${resultado.nivel} `)


switch (resultado.nivel) {

    case "Diamante":
    case "Lendário":
    case "Imortal":
        console.log(`Seu heroi está apto por ter o saldo de ${resultado.saldo} e ter o nivel ${resultado.nivel}`)
        break;
    default:
        console.log(`Seu herói não está apto, pois está no nível ${resultado.nivel}`);
        break;
}



