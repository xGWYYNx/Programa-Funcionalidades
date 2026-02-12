import colors from 'colors';
import readline from 'readline-sync';
import menuOperaciones from '../menusPrograma.js';
import FuncionesMatematicas from './funcionesMatematicas.js';
import FuncionesCaracter from './funcionesCaracter.js';
import FuncionesVarias from './funcionesVarias.js';
import FuncionesComida from './funcionComida.js';

// Funciones Matematicas

function FuncionalidadMenuOperacionesMatematicas (){

    let opcionElegidaMenu = -1;

    do {
        menuOperaciones.MenuOperacionesMatematicas();

        opcionElegidaMenu = readline.questionInt("Ingresa una de las opciones del menu que quieras realizar: ".yellow
        );

        if (isNaN(opcionElegidaMenu)) {
            console.log("Esta no es una opcion valida, ingrese nuevamente".red);

        } else if (opcionElegidaMenu % 1 !== 0) {
            console.log("Este es un numero decimal, ingrese nuevamente".yellow);

        } else {

            switch (opcionElegidaMenu) {
                case 0:
                    console.log("Saliendo del programa...".green);
                    break;

                case 1:
                    FuncionesMatematicas.NumeroPositivoNegativo();
                    break;

                case 2:
                    FuncionesMatematicas.ContarNumero();
                    break;

                case 3:
                    FuncionesMatematicas.ContarNumeroPar();
                    break;
                case 4:
                    FuncionesMatematicas.ContarNumeroTablaMultiplicar();
                    break;
                case 5:
                    FuncionesMatematicas.MinimoMaximo();
                    break;
                case 6:
                    FuncionesMatematicas.NumerosParesArreglo();
                    break;
                case 7:
                    FuncionesMatematicas.NumeroDosDigitosBaseN();
                    break;

                default:
                    console.log("No es una opcion permitida".red);
                    break;
            }
        }

    } while (opcionElegidaMenu !== 0);
}

// Funciones Caracter

function FuncionalidadMenuOperacionesCaracter (){

    let opcionElegidaMenu = -1;

    do {
        menuOperaciones.MenuOperacionesCaracteres();

        opcionElegidaMenu = readline.questionInt("Ingresa una de las opciones del menu que quieras realizar: ".yellow
        );

        if (isNaN(opcionElegidaMenu)) {
            console.log("Esta no es una opcion valida, ingrese nuevamente".red);

        } else if (opcionElegidaMenu % 1 !== 0) {
            console.log("Este es un numero decimal, ingrese nuevamente".yellow);

        } else {

            switch (opcionElegidaMenu) {
                case 0:
                    console.log("Saliendo del programa...".green);
                    break;

                case 1:
                    FuncionesCaracter.EncontrarCaracter();
                    break;

                case 2:
                    FuncionesCaracter.RepetirCaracter();
                    break;

                default:
                    console.log("No es una opcion permitida".red);
                    break;
            }
        }

    } while (opcionElegidaMenu !== 0);
}

// Funciones Alimentos

function FuncionalidadMenuOperacionesAlimentos (){

    let opcionElegidaMenu = -1;

    do {
        menuOperaciones.MenuOperacionesAlimentos();

        opcionElegidaMenu = readline.questionInt("Ingresa una de las opciones del menu que quieras realizar: ".yellow
        );

        if (isNaN(opcionElegidaMenu)) {
            console.log("Esta no es una opcion valida, ingrese nuevamente".red);

        } else if (opcionElegidaMenu % 1 !== 0) {
            console.log("Este es un numero decimal, ingrese nuevamente".yellow);

        } else {

            switch (opcionElegidaMenu) {
                case 0:
                    console.log("Saliendo del programa...".green);
                    break;

                case 1:
                    FuncionesComida.BebidaComida();
                    break;

                case 2:
                    FuncionesComida.BusquedaBebida();
                    break;

                default:
                    console.log("No es una opcion permitida".red);
                    break;
            }
        }

    } while (opcionElegidaMenu !== 0);
}

// Funciones Varias

function FuncionalidadMenuOperacionesVarias (){

    let opcionElegidaMenu = -1;

    do {
        menuOperaciones.MenuOperacionesVarias();

        opcionElegidaMenu = readline.questionInt("Ingresa una de las opciones del menu que quieras realizar: ".yellow
        );

        if (isNaN(opcionElegidaMenu)) {
            console.log("Esta no es una opcion valida, ingrese nuevamente".red);

        } else if (opcionElegidaMenu % 1 !== 0) {
            console.log("Este es un numero decimal, ingrese nuevamente".yellow);

        } else {

            switch (opcionElegidaMenu) {
                case 0:
                    console.log("Saliendo del programa...".green);
                    break;

                case 1:
                    FuncionesVarias.FacturaProducto();
                    break;

                case 2:
                    FuncionesVarias.MedioTransporte();
                    break;
                case 3:
                    FuncionesVarias.SalaDePago();
                    break;
                case 4:
                    FuncionesVarias.SalaDePago2();
                    break;

                default:
                    console.log("No es una opcion permitida".red);
                    break;
            }
        }

    } while (opcionElegidaMenu !== 0);
}

function FuncionalidadMenuGeneral (){
    let opcionElegidaMenu = -1;
    do {
        menuOperaciones.MenuGeneral();
        console.log("");
        console.log("");
        opcionElegidaMenu = readline.questionInt("Ingresa una de las opciones del menu que quieras realizar: ".yellow
        );
        if (isNaN(opcionElegidaMenu)) {
            console.log("Esta no es una opcion valida, ingrese nuevamente".red);
        } else if (opcionElegidaMenu % 1 !== 0) {
            console.log("Este es un numero decimal, ingrese nuevamente".yellow);
        } else {

            switch (opcionElegidaMenu) {
                case 0:
                    console.log("Saliendo del programa...".green);
                    break;

                case 1:
                    FuncionesMenus.FuncionalidadMenuOperacionesMatematicas();
                    break;

                case 2:
                    FuncionesMenus.FuncionalidadMenuOperacionesCaracter();
                    break;

                case 3:
                    FuncionesMenus.FuncionalidadMenuOperacionesAlimentos();
                    break;
                case 4:
                    FuncionesMenus.FuncionalidadMenuOperacionesVarias();
                    break;
                case 5:
                        
                    break;

                default:
                    console.log("No es una opcion permitida".red);
                    break;
                }
            }

    } while (opcionElegidaMenu !== 0);
}
    
const FuncionesMenus = {
    FuncionalidadMenuOperacionesMatematicas,
    FuncionalidadMenuOperacionesCaracter,
    FuncionalidadMenuOperacionesAlimentos,
    FuncionalidadMenuOperacionesVarias,
    FuncionalidadMenuGeneral
}


export default FuncionesMenus;