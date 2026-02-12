import colors from 'colors';
import readline from 'readline-sync';


let numeroDigitadoValor;

function NumeroPositivoNegativo () {

do {
    numeroDigitadoValor = Number(readline.question('Ingrese un numero para saber que puede ser: '.red)
    );

    if (isNaN(numeroDigitadoValor)) {
        console.log('El valor ingresado no es un numero, por favor ingrese un numero entero'.red);
    } else if (numeroDigitadoValor % 1 !== 0) {
        console.log('El numero ingresado es un numero decimal, por favor ingrese un numero entero'.red);
    }else{
        if (numeroDigitadoValor > 0){
            console.log('El numero ingresado es un numero positivo'.green);
        }else if (numeroDigitadoValor < 0){
            console.log('El numero ingresado es un numero negativo'.yellow);
        }else{
            console.log('El numero ingresado es el numero cero'.blue);
        }
    }
} while (numeroDigitadoValor !== 0);

}





function ContarNumero() {
    numeroDigitadoValor = readline.questionInt("Ingrese un numero para contar hasta el:".red);
    if (isNaN(numeroDigitadoValor)) {
        console.log('El valor ingresado no es un numero, por favor ingrese un numero entero'.red);
    } else if (numeroDigitadoValor % 1 !== 0) {
        console.log('El numero ingresado es un numero decimal, por favor ingrese un numero entero'.red);
    } else {
        console.log(`Contando hasta el numero ${numeroDigitadoValor}:`.green);
        for (let i = 1; i <= numeroDigitadoValor; i++) {
            console.log(i);
        }
    }
}





function ContarNumeroPar() {
    numeroDigitadoValor = readline.questionInt("Ingrese un numero para contar hasta el:".red);
    if (isNaN(numeroDigitadoValor)) {
        console.log('El valor ingresado no es un numero, por favor ingrese un numero entero'.red);
    } else if (numeroDigitadoValor % 1 !== 0) {
        console.log('El numero ingresado es un numero decimal, por favor ingrese un numero entero'.red);
    } else {
        console.log(`Contando hasta el numero ${numeroDigitadoValor}:`.green);
        for (let i = 1; i <= numeroDigitadoValor; i++) {
            if (i % 2 === 0 ) {
                console.log(i);
                
            }
        }
    }
}





function ContarNumeroTablaMultiplicar(numero) {
    numeroDigitadoValor = readline.questionInt("Ingrese un numero para contar hasta el:".red);
    if (isNaN(numeroDigitadoValor)) {
        console.log('El valor ingresado no es un numero, por favor ingrese un numero entero'.red);
    } else if (numeroDigitadoValor % 1 !== 0) {
        console.log('El numero ingresado es un numero decimal, por favor ingrese un numero entero'.red);
    } else {
        console.log(`Tabla de multiplicar del ${numeroDigitadoValor}:`.green);
        for (let i = 1; i <= 10; i++) {
            console.log(`${numeroDigitadoValor} * ${i} = ${numeroDigitadoValor * i}`.red);
            
        }
    }
}




function MinimoMaximo() {

    let numerosListado = [];
    let sumaElementosListado = 0;
    let numeroMenor;
    let numeroMayor;
    let cantidadNumerosArreglo;

    do {
        cantidadNumerosArreglo = readline.questionInt("Cuantos numeros desea ingresar: ".red);

        if (isNaN(cantidadNumerosArreglo)) {
            console.log("El valor ingresado no es un numero, por favor ingrese un numero entero".red);
        } else if (cantidadNumerosArreglo <= 0) {
            console.log("Debes ingresar al menos un numero".yellow);
        }

    } while (cantidadNumerosArreglo <= 0);

    for (let i = 0; i < cantidadNumerosArreglo; i++) {

        numerosListado.push(readline.questionInt(`Ingrese el numero ${i + 1}: `.red));
        
        sumaElementosListado = sumaElementosListado + numerosListado[i];

        if (i === 0) {
            numeroMenor = numerosListado[i];
            numeroMayor = numerosListado[i];
        } else {
            if (numerosListado[i] < numeroMenor) {
                numeroMenor = numerosListado[i];
            }

            if (numerosListado[i] > numeroMayor) {
                numeroMayor = numerosListado[i];
            }
        }
    }

    let promedioNumerosArreglo = sumaElementosListado / cantidadNumerosArreglo;

    console.log("Numero menor: ".green + numeroMenor);
    console.log("Numero mayor: ".green + numeroMayor);
    console.log("Promedio: ".green + promedioNumerosArreglo.toFixed(2));
}




function NumerosParesArreglo() {

    let numerosListadoPares = [];
    let paresDigitados = []
    let cantidadNumerosArregloPares;

    do {
        cantidadNumerosArregloPares = readline.questionInt("Cuantos numeros desea ingresar: ".red);

        if (isNaN(cantidadNumerosArregloPares)) {
            console.log("El valor ingresado no es un numero, por favor ingrese un numero entero".red);
        } else if (cantidadNumerosArregloPares <= 0) {
            console.log("Debes ingresar al menos un numero".yellow);
        }

    } while (cantidadNumerosArregloPares <= 0);

    for (let i = 0; i < cantidadNumerosArregloPares; i++) {
        numerosListadoPares.push(readline.questionInt(`Ingrese el numero ${i + 1}: `.red));
        if (numerosListadoPares[i] % 2 === 0 ) {
            paresDigitados.push(numerosListadoPares[i])
        }
    }

    console.log(`Los numeros pares que ingreso son: ${paresDigitados} y son ${paresDigitados.length} numeros`.green);
}

function NumeroDosDigitosBaseN() {

    const base = readline.questionInt("Ingrese la base: ");
    const numero = readline.question("Ingrese un numero de dos digitos: ");

    if (base <= 1) {
        console.log("La base debe ser mayor que 1");
        return;
    }

    if (numero.length !== 2) {
        console.log("El numero no tiene dos digitos");
        return;
    }

    const digito1 = parseInt(numero[0]);
    const digito2 = parseInt(numero[1]);

    if (digito1 === 0) {
        console.log("El numero no puede iniciar en 0");
        return;
    }

    if (digito1 >= base || digito2 >= base) {
        console.log("El numero no es valido para la base ingresada");
        return;
    }

    console.log(`El numero ${numero} es un numero de dos digitos en base ${base}`);
}





const FuncionesMatematicas= {
    NumerosParesArreglo,
    NumeroPositivoNegativo,
    ContarNumero,
    ContarNumeroPar,
    ContarNumeroTablaMultiplicar,
    MinimoMaximo,
    NumeroDosDigitosBaseN
}

export default FuncionesMatematicas 