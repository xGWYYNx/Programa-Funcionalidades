import colors from 'colors';
import readline from 'readline-sync';


function InicioSesion (){

    const UsuariosCorrectos = ["Dilan", "Profesor", "Invitado"];
    const clavesCorrectas = ["1234", "5678", "1220"];

    for (let intentos = 1; intentos <= 3; intentos++) {

        const claveIngresada = readline.question("Ingrese la clave de cuatro digitos para iniciar sesion: ".yellow);

        if (clavesCorrectas.includes(claveIngresada)) {

            console.log("Inicio de sesion exitoso".green);
            console.log(`Usuario: ${UsuariosCorrectos[clavesCorrectas.indexOf(claveIngresada)]}`.green);

            return true; 
        } 
        else {
            console.log(`Clave incorrecta. Intento ${intentos} de 3`.red);
        }
    }

    console.log("Has alcanzado el número máximo de intentos. Acceso bloqueado.".yellow);
    return false; 
}


const ConfirmacionClave = {
    InicioSesion
}


export default ConfirmacionClave;