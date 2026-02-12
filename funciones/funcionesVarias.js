import colors from 'colors';
import readline from 'readline-sync';


function FacturaProducto(){
    const producto  = readline.question("Ingrese el nombre del producto: ".green);
    const precioProducto = readline.questionFloat("Ingrese el precio del producto: ".green);
    const descuentoProducto = readline.questionFloat("Ingrese el descuento en porcentaje (sin el simbolo %): ".green);

    const descuentoCalculado = (precioProducto * descuentoProducto) / 100;
    const precioFinalProducto = precioProducto - descuentoCalculado;

    console.log("Producto: ".yellow + producto);
    console.log("Precio: ".yellow + precioProducto);
    console.log("Descuento: ".yellow + descuentoProducto + "%");
    console.log("Precio final: ".yellow + precioFinalProducto);
}

function MedioTransporte() {

    const mediosTransporteDisponible = ["avion", "flota", "carro", "bicicleta"];
    const dineroDisponibleTransporte = 100000;

    console.log(`Medios de transporte disponibles: ${mediosTransporteDisponible}`.yellow);
    console.log("Avion: 80000 | Flota: 50000".red);
    console.log(`Dinero disponible: ${dineroDisponibleTransporte}`.cyan);

    const transporteSeleccionado = readline.question("Ingrese el medio de transporte que desea utilizar: ".green).toLowerCase();

    if (!mediosTransporteDisponible.includes(transporteSeleccionado)) {
        console.log("Medio de transporte no válido".red);
        return;
    }

    switch (transporteSeleccionado) {

        case "avion":
            if (dineroDisponibleTransporte >= 80000) {
                console.log("Perfecta elección, dirígete a la puerta de embarque ".green);
                console.log(`Saldo actual: ${dineroDisponibleTransporte - 80000}`);
            } else {
                console.log("No tienes suficiente dinero para el avión".red);
            }
            break;

        case "flota":
            if (dineroDisponibleTransporte >= 50000) {
                console.log("Perfecta elección, dirígete a la terminal ".green);
                console.log(`Saldo actual: ${dineroDisponibleTransporte - 50000}`);
            } else {
                console.log("No tienes suficiente dinero para la flota".red);
            }
            break;

        case "carro":
            const ropaCarro = readline.question("¿Llevas ropa cómoda y adecuada para conducir? (si / no): ".yellow).toLowerCase();

            if (ropaCarro === "si") {
                console.log("Perfecto, puedes tomar el carro ".green);
            } else {
                console.log("No es recomendable conducir sin ropa adecuada".red);
            }
            break;

        case "bicicleta":
            const ropaBici = readline.question("¿Lleva casco y ropa deportiva? (si / no): ".yellow).toLowerCase();

            if (ropaBici === "si") {
                console.log("Perfecto, puedes tomar la bicicleta ".green);
            } else {
                console.log("No puedes usar la bicicleta sin la ropa adecuada".red);
            }
            break;
    }
}


function SalaDePago(){
    const creditoDisponible = 40000;

    if (creditoDisponible >= 40000) {
        console.log("Tienes credito disponible para realizar la compra".green);
    } else {
        console.log("No tienes credito disponible para realizar la compra".red);
    }
    let contadorCreditoDisponible = creditoDisponible;
    const planesDeJuego = ["invitado", "plan basico", "plan premium", "plan elite"];

    console.log(`Contador de credito disponible: ${contadorCreditoDisponible}`.cyan);
    console.log("-------------------------------------------------------------------");
    console.log(`Planes de juego disponibles: ${planesDeJuego}`.yellow);
    console.log("-------------------------------------------------------------------");
    console.log("Plan Básico: Juegos 2D y 3D 2000| Plan Premium: Juegos 2D, 3D y Realidad Virtual 3000| Plan Elite: Todos los juegos disponibles 4000 | Invitado : 1 Juego 1000".red);
    console.log("-------------------------------------------------------------------");
    
    
    const planSeleccionado = readline.question("Ingrese el plan de juego que desea adquirir: ".green).toLowerCase();

    if (!planesDeJuego.includes(planSeleccionado)) {
        console.log("Plan de juego no válido".red);
        return;
    }else{
        switch (planSeleccionado) {
            case "plan basico":
                const valorPlanBasico = 2000;
                console.log("-------------------------------------------------------------------");
                console.log("Has seleccionado el plan básico".green);
                console.log(`Contador de credito disponible: ${contadorCreditoDisponible-valorPlanBasico}`.cyan);
                contadorCreditoDisponible = contadorCreditoDisponible - valorPlanBasico;
                console.log('                                                                                             ');
                console.log('                                                                                             ');
                console.log('             ','                                                             '.bgGreen);
                console.log('             ','  '.bgGreen,'                                                       ','  '.bgGreen,'            ',);
                console.log('             ','  '.bgGreen,'                       PLAN BASICO                     ','  '.bgGreen,'            ',);
                console.log('             ','  '.bgGreen,'                                                       ','  '.bgGreen,'            ',);
                console.log('             ','                                                             '.bgGreen);
                console.log('             ','  '.bgGreen,'                                                       ','  '.bgGreen,'            ',);
                console.log('             ','  '.bgGreen,'                        CONSOLAS                       ','  '.bgGreen,'            ',);
                console.log('             ','  '.bgGreen,'                        JUEGOS 2D                      ','  '.bgGreen,'            ',);
                console.log('             ','  '.bgGreen,'                                                       ','  '.bgGreen,'            ',);
                console.log('             ','                                                             '.bgGreen);
                
                break;
                case "plan premium":

                    const valorPlanPremium = 3000;
                    contadorCreditoDisponible = contadorCreditoDisponible - valorPlanPremium;
                    console.log("-------------------------------------------------------------------");
                    console.log("Has seleccionado el plan premium".green);
                    console.log(`Contador de credito disponible: ${contadorCreditoDisponible-valorPlanPremium}`.cyan);
                    console.log('                                                                                             ');
                    console.log('                                                                                             ');
                    console.log('             ','                                                             '.bgGreen);
                    console.log('             ','  '.bgGreen,'                                                       ','  '.bgGreen,'            ',);
                    console.log('             ','  '.bgGreen,'                      PLAN PREMIUM                     ','  '.bgGreen,'            ',);
                    console.log('             ','  '.bgGreen,'                                                       ','  '.bgGreen,'            ',);
                    console.log('             ','                                                             '.bgGreen);
                    console.log('             ','  '.bgGreen,'                                                       ','  '.bgGreen,'            ',);
                    console.log('             ','  '.bgGreen,'                        CONSOLAS                       ','  '.bgGreen,'            ',);
                    console.log('             ','  '.bgGreen,'                       JUEGOS 2D                       ','  '.bgGreen,'            ',);
                    console.log('             ','  '.bgGreen,'                       JUEGOS 3D                       ','  '.bgGreen,'            ',);
                    console.log('             ','  '.bgGreen,'                                                       ','  '.bgGreen,'            ',);
                    console.log('             ','                                                             '.bgGreen);

                    break;
                case "plan elite":
                    const valorPlanElite = 4000;
                    contadorCreditoDisponible = contadorCreditoDisponible - valorPlanElite;
                    console.log("-------------------------------------------------------------------");
                    console.log("Has seleccionado el plan elite".green);
                    console.log(`Contador de credito disponible: ${contadorCreditoDisponible-valorPlanElite}`.cyan);
                    console.log('                                                                                             ');
                    console.log('                                                                                             ');
                    console.log('             ','                                                             '.bgGreen);
                    console.log('             ','  '.bgGreen,'                                                       ','  '.bgGreen,'            ',);
                    console.log('             ','  '.bgGreen,'                       PLAN ELITE                      ','  '.bgGreen,'            ',);
                    console.log('             ','  '.bgGreen,'                                                       ','  '.bgGreen,'            ',);
                    console.log('             ','                                                             '.bgGreen);
                    console.log('             ','  '.bgGreen,'                                                       ','  '.bgGreen,'            ',);
                    console.log('             ','  '.bgGreen,'                        CONSOLAS                       ','  '.bgGreen,'            ',);
                    console.log('             ','  '.bgGreen,'                        JUEGOS 2D                      ','  '.bgGreen,'            ',);
                    console.log('             ','  '.bgGreen,'                        JUEGOS 3D                      ','  '.bgGreen,'            ',);
                    console.log('             ','  '.bgGreen,'                     REALIDAD VIRTUAL                  ','  '.bgGreen,'            ',);
                    console.log('             ','  '.bgGreen,'                                                       ','  '.bgGreen,'            ',);
                    console.log('             ','                                                             '.bgGreen);
                        
                break;
                case "invitado":
                    const valorPlanInvitado = 1000;
                    contadorCreditoDisponible = contadorCreditoDisponible - valorPlanInvitado;
                    console.log("-------------------------------------------------------------------");
                    console.log("Has seleccionado el plan invitado".green);
                    console.log(`Contador de credito disponible: ${contadorCreditoDisponible-valorPlanInvitado}`.cyan);
                    console.log('                                                                                             ');
                    console.log('                                                                                             ');
                    console.log('             ','                                                             '.bgGreen);
                    console.log('             ','  '.bgGreen,'                                                       ','  '.bgGreen,'            ',);
                    console.log('             ','  '.bgGreen,'                       PLAN INVITADO                   ','  '.bgGreen,'            ',);
                    console.log('             ','  '.bgGreen,'                                                       ','  '.bgGreen,'            ',);
                    console.log('             ','                                                             '.bgGreen);
                    console.log('             ','  '.bgGreen,'                                                       ','  '.bgGreen,'            ',);
                    console.log('             ','  '.bgGreen,'                        CONSOLAS                       ','  '.bgGreen,'            ',);
                    console.log('             ','  '.bgGreen,'                                                       ','  '.bgGreen,'            ',);
                    console.log('             ','                                                             '.bgGreen);
                        
                break;
        }
    }
}

function SalaDePago2() {

    let creditoDisponible = 40000;

    console.log(`Crédito disponible: ${creditoDisponible}`.cyan);
    console.log("--------------------------------------------------");

    const valorPagado = readline.questionInt(
        "Ingrese el valor que desea pagar (1000, 2000, 3000, 4000): ".green
    );

    if (valorPagado > creditoDisponible) {
        console.log("No tienes suficiente crédito.".red);
        return;
    }

    if (valorPagado < 1000) {
        console.log("Debes ingresar al menos 1000 para acceder a juegos.".red);
        return;
    }

    creditoDisponible = creditoDisponible - valorPagado;

    console.log(`Crédito restante: ${creditoDisponible}`.cyan);
    console.log("--------------------------------------------------");

    if (valorPagado >= 4000) {
        console.log("Acceso concedido a:".green);
        console.log(" Consolas");
        console.log(" Juegos 2D");
        console.log(" Juegos 3D");
        console.log(" Realidad Virtual");
    }
    else if (valorPagado >= 3000) {
        console.log("Acceso concedido a:".green);
        console.log(" Consolas");
        console.log(" Juegos 2D");
        console.log(" Juegos 3D");
    }
    else if (valorPagado >= 2000) {
        console.log("Acceso concedido a:".green);
        console.log(" Consolas");
        console.log(" Juegos 2D");
    }
    else if (valorPagado >= 1000) {
        console.log("Acceso concedido a:".green);
        console.log(" Consolas");
    }
}




const FuncionesVarias = {
    FacturaProducto,
    MedioTransporte,
    SalaDePago,
    SalaDePago2
}

export default FuncionesVarias;