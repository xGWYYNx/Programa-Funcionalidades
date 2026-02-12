import colors from 'colors';
import readline from 'readline-sync';


function BebidaComida (){
    const comidaSeleccionada = readline.question("Ingrese el nombre de una comida para saber que bebida es ideal para acompanarla: ".yellow);

    switch (comidaSeleccionada) {
        case "carne":
            console.log("La bebida perfecta para acompañar a la carne es el vino tinto");
            break;
            
        case "pescado":
            console.log("La bebida perfecta para acompañar al pescado es el vino blanco");
            break;
        
        case "verdura":
            console.log("La bebida perfecta para acompañar a las verduras es el agua");
            break;

        default:
            console.log("No tenemos una bebida ideal para esa comida, pero el agua siempre es una buena opción");
            break;
    }
}

function BusquedaBebida(){
    const bebibasArreglo = ["vino", "cerveza", "gaseosa", "agua"];
    console.log("Bebidas disponibles:", bebibasArreglo);
    const bebidaSeleccionada = readline.question("Ingrese una de las bebidas disponibles: ".yellow);

    if (bebibasArreglo.includes(bebidaSeleccionada)) {
        console.log("Perfecta eleccion, porfavor pasar a la barra  para tomar la bebida".green);
        
    }else{
        console.log("No tenemos de esta bebida en estos momentos, puedes ir a la tienda por ella".red);
        
    }
}


const FuncionesComida = {
    BebidaComida,
    BusquedaBebida
}

export default FuncionesComida;