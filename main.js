import colors from 'colors';
import readline from 'readline-sync';
import FuncionesMatematicas from './funciones/funcionesMatematicas.js';
import menuOperaciones from './menusPrograma.js';
import FuncionesCaracter from './funciones/funcionesCaracter.js'
import inicioSesion from './funciones/funcionInicioSesion.js';
import ConfirmacionClave from './funciones/funcionInicioSesion.js';
import FuncionesComida from './funciones/funcionComida.js';
import FuncionesVarias from './funciones/funcionesVarias.js';
import FuncionesMenus from './funciones/funcionesMenus.js';




let acceso = false;

while (!acceso) {
    acceso = ConfirmacionClave.InicioSesion();
}
FuncionesMenus.FuncionalidadMenuGeneral();



