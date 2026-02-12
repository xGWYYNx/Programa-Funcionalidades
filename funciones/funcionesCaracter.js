import colors from 'colors';
import readline from 'readline-sync';


function EncontrarCaracter() {
    const caracteresArreglo = ["A", "B", "C", "D", "E"];
    let caracterMayuscula;

    do {
        const caracterIngresadoUsuario = readline.question("Ingrese un caracter aleatorio para acertarlo: ".green);

        caracterMayuscula = caracterIngresadoUsuario.toUpperCase();

        if (caracteresArreglo.includes(caracterMayuscula)) {
            console.log("Felicidades acertaste el caracter, toma un dulce".yellow);
        } else {
            console.log("No acertaste, intenta nuevamente");
        }

    } while (!caracteresArreglo.includes(caracterMayuscula));
}

function RepetirCaracter(){
    const caracterRepetido = readline.question("Ingrese un caracter para repetirlo n veces:".green);

    const vecesaRepetir = readline.questionInt("Ingrese numero de veces a repetir el caracter: ")

    for (let i = 0; i < vecesaRepetir; i++) {
        console.log(caracterRepetido);
        
    }
    
}



const FuncionesCaracter ={
    EncontrarCaracter,
    RepetirCaracter
}


export default FuncionesCaracter 