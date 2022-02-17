// Video 35 ejercicios 2 -  Ejercicio 5
//Programa una función que invierta las palabras de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá "odnuM aloH".

const invertirCadena = (cadena = "") =>
  !cadena
    ? console.warn("No se ingresó cadena de texto")
    : console.info(cadena.split("").reverse().join(""));

/*invertirCadena();
invertirCadena("Hola Mundos Sergio"); */

//Ejercicio 6 -------------
//Programa una función para contar el número de veces que se repite una palabra en un texto largo, pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2.

const contarVeces = (cadena = "", texto = "") => {
  if (!cadena) return console.warn("No se ingresó cadena de texto");
  if (!texto) return console.warn("Falta la palabra a contar");
  let i = 0,
    contador = 0;
  while (i !== -1) {
    i = cadena.indexOf(texto, i);
    if (i !== -1) {
      i++;
      contador++;
    }
  }
  return console.info(`La palabra ${texto} se repite ${contador} veces`);
};

/* contarVeces();
contarVeces("hola");
contarVeces(
  "Lorem ipsum dolor sit amet, amor consectetur adipisicing elit. Illum numquam alias quisquam deserunt beatae culpa minus, reprehenderit cum amor laborum error, amor amor amor adipisci explicabo nulla. Voluptatem saepe dolore minus hic dolorem atque!",
  "amor");*/

//Ejercicio 7-------------
//Programa una función que valide si una palabra o frase dada, es un palíndromo (que se lee igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true.

const palindromo = (palabra = "") => {
  if (!palabra) return console.warn("No ingresaste palabra o frase");
  palabra = palabra.toLowerCase();
  let alReves = palabra.split("").reverse().join("");
  return palabra === alReves
    ? console.info(
        `Si es palindromo, palabra ofiginal: ${palabra}, palabra al revés: ${alReves}`
      )
    : console.info(
        `NO es palindromo, palabra ofiginal: ${palabra}, palabra al revés: ${alReves}`
      );
};

/* palindromo("Menem");
palindromo("salas");
palindromo("op olo po"); */

//Ejercicio 8 -------------
//Programa una función que elimine cierto patrón de caracteres de un texto dado, pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5.

const eliminarCaracteres = (texto = "", patron = "", reemplazo = "") =>
  !texto
    ? console.warn("No ingresó texto")
    : !patron
    ? console.warn("No ingreso patrón")
    : console.info(texto.replace(new RegExp(patron, "ig"), reemplazo));

/* eliminarCaracteres();
eliminarCaracteres("xyz 1, xyz 2, xyz 3, xyz 4, xyz 5", "xyz"); */

//Ejercicio 9 -------------
// Programa una función que obtenga un numero aleatorio entre 501 y 600.

const aleatorio = () => {
  let a;
  do {
    a = Math.round(Math.random() * 1000);
  } while (a < 500 || a > 600);
  return console.info("El número aleatorio es " + a);
};

//aleatorio();

//Ejercicio 10 -------------
//Programa una función que reciba un número y evalúe si es capicúa o no (que se lee igual en un sentido que en otro), pe. miFuncion(2002) devolverá true.

const capicua = (numero = 0) => {
  if (!numero) return console.warn("Debe ingresar número");
  if (typeof numero !== "number")
    return console.error(`El valor ${numero} ingresado, No es un número`);
  numero = numero.toString();
  let numInverso = numero.split("").reverse().join("");
  return parseFloat(numero) === parseFloat(numInverso)
    ? console.info(
        "Si es capicúa " + parseFloat(numero) + " " + parseFloat(numInverso)
      )
    : console.info(
        "No es capicúa " + parseFloat(numero) + " " + parseFloat(numInverso)
      );
};

//capicua(0330);

const capicua1 = (numero1 = 0) => {
  if (!numero1) return console.warn("Debe ingresar número");
  if (typeof numero1 !== "number")
    return console.error(`El valor ${numero1} ingresado, No es un número`);
  numero1 = numero1.toString();
  let numInverso1 = numero1.split("").reverse().join("");
  return numero1 === numInverso1
    ? console.info(
        `SI es capicúa, #ingresado: ${numero1}, #al revés: ${numInverso1}`
      )
    : console.info(
        `NO es capicúa, #ingresado: ${numero1}, #al revés: ${numInverso1}`
      );
};

//capicua1(212.212);

//Ejercicio 11 -------------
//Programa una función que calcule el factorial de un número (El factorial de un entero positivo n, se define como el producto de todos los números enteros positivos desde 1 hasta n), pe. miFuncion(5) devolverá 120.

const factorial = (numero = undefined) => {
  if (numero === undefined) return console.warn("Debe ingresar número");
  if (typeof numero !== "number")
    return console.error(`El valor ${numero} ingresado, No es un número`);
  if (numero === 0) return console.warn("El número no puede ser cero");
  if (Math.sign(numero) === -1)
    return console.error("El numero no puede ser negativo");
  let factorial = 1;
  for (let i = numero; i > 1; i--) {
    factorial *= i;
  }
  return console.info(`El factorial de ${numero} es ${factorial}`);
};

//factorial();
//factorial("a");
//factorial("7");
//factorial({});
//factorial(-7);
//factorial(20);

//Ejercicio 12 -------------
//Programa una función que determine si un número es primo (aquel que solo es divisible por sí mismo y 1) o no, pe. miFuncion(7) devolverá true.

const numeroPrimo = (numero = undefined) => {
  if (numero === undefined) return console.warn("Debe ingresar número");
  if (typeof numero !== "number")
    return console.error(`El valor ${numero} ingresado, No es un número`);
  if (numero === 0) return console.warn("El número no puede ser cero");
  if (numero === 1) return console.warn("El número no puede ser uno");
  if (Math.sign(numero) === -1)
    return console.error("El numero no puede ser negativo");

  let divisible = false;

  for (let i = 2; i < numero; i++) {
    if (numero % i === 0) {
      divisible = true;
      break;
    }
  }
  return divisible
    ? console.log(`El número ${numero} No es primo`)
    : console.log(`El número ${numero} Si es primo`);
};
//numeroPrimo();
//numeroPrimo(0);
//numeroPrimo(1);
//numeroPrimo("siete");
//numeroPrimo(7);
//numeroPrimo(73);

//Ejercicio 13 -------------
//Programa una función que determine si un número es par o impar, pe. miFuncion(29) devolverá Impar.

const par = (numero = undefined) => {
  if (numero === undefined) return console.warn("Debe ingresar número");
  if (typeof numero !== "number")
    return console.error(`El valor ${numero} ingresado, No es un número`);
  let divisible = false;
  if (numero % 2 === 0) {
    divisible = true;
  }
  return divisible
    ? console.log(`El número ${numero} es PAR!`)
    : console.log(`El número ${numero} No es PAR!`);
};
//console.time(`time`);
//par(-10);
//console.timeEnd(`time`);

//Ejercicio 14 -------------
//Programa una función para convertir grados Celsius a Fahrenheit y viceversa, pe. miFuncion(0,"C") devolverá 32°F.

const convertirGrados = (grados = undefined, unidad = undefined) => {
  if (grados === undefined)
    return console.warn("Debe ingresar valor de grados");
  if (typeof grados !== "number")
    return console.error(`El valor ${grados} ingresado, No es un número`);
  if (unidad === undefined)
    return console.warn("Debe ingresar el tipo de unidad");
  if (typeof unidad !== "string")
    return console.error(`El valor ${unidad} ingresado, No es texto`);
  if (unidad.length !== 1 || !/(C|F)/.test(unidad))
    return console.warn("Valor de unidad no válido");
  if (unidad === "C") {
    return console.info(`${grados}ºC = ${Math.round(grados * (9 / 5) + 32)}ºF`);
  } else if (unidad === "F") {
    return console.info(
      `${grados}ºC = ${Math.round((grados - 32) * (5 / 9))}ºF`
    );
  }
};
// convertirGrados(25, "C");
// convertirGrados(451, "F");

// Ejercicio 15 -------------
// Programa una función para convertir números de base binaria a decimal y viceversa, pe. miFuncion(100,2) devolverá 4 base 10.

const convertirBinarioDecimal = (numero = undefined, base = undefined) => {
  if (numero === undefined) return console.warn("ingrese número a convertir");
  if (typeof numero !== "number")
    return console.error(`El valor ${numero} ingresado, No es un número`);
  if (base === undefined) return console.warn("ingrese la base");
  if (typeof base !== "number")
    return console.error(`El valor ${base} ingresado, No es un número`);
  if (base === 2) {
    return console.info(
      `${numero} base ${base} = ${parseInt(numero, base)} base 10`
    );
  } else if (base === 10) {
    return console.info(
      `${numero} base ${base} = ${numero.toString(base)} base 2`
    );
  } else {
    return console.info(`El tipo de base a convertir NO es válido`);
  }
};
// convertirBinarioDecimal(11111111, 2);
// convertirBinarioDecimal(255, 10);
// convertirBinarioDecimal(1001010, 10);
// convertirBinarioDecimal(100, 2);

//Ejercicio 16 --------------
// Programa una función que devuelva el monto final después de aplicar un descuento a una cantidad dada, pe. miFuncion(1000, 20) devolverá 800.

const aplicarDescuento = (monto = undefined, descuento = 0) => {
  if (monto === undefined) return console.warn("ingrese monto a descontar");
  if (typeof monto !== "number")
    return console.error(`El valor ${monto} ingresado, No es un número`);
  if (monto === 0) return console.warn("ingrese monto");
  if (Math.sign(monto) === -1)
    return console.error("El monto no puede ser negativo");
  if (typeof descuento !== "number")
    return console.error(`El valor ${descuento} ingresado, No es un número`);
  if (Math.sign(descuento) === -1)
    return console.error("El descuento no puede ser negativo");
  return console.info(
    `Para el monto de $${monto} se aplica el descuento de ${descuento}%. Resultando = ${
      monto - (monto * descuento) / 100
    }`
  );
};

//aplicarDescuento(1000, 20);
//aplicarDescuento(1);

//Ejercicio 17 --------------
// Programa una función que dada una fecha válida determine cuantos años han pasado hasta el día de hoy, pe. miFuncion(new Date(1984,4,23)) devolverá 35 años (en 2020).

const calcularAnios = (fecha = undefined) => {
  if (fecha === undefined) return console.warn("ingrese la fecha");
  if (!(fecha instanceof Date))
    return console.error(
      `El valor ${fecha} ingresado, No está en formato fecha.\nDebe ingresar: \n"new Date(año,mes,dia)"`
    );
  let hoyMenosFecha = new Date().getTime() - fecha.getTime(),
    aniosEnMS = 1000 * 60 * 60 * 24 * 365,
    aniosHumanos = Math.floor(hoyMenosFecha / aniosEnMS);
  return Math.sign(aniosHumanos) === -1
    ? console.info(
        `Faltan ${Math.abs(aniosHumanos)} años para el ${fecha.getFullYear()}.`
      )
    : Math.sign(aniosHumanos) === 1
    ? console.info(
        `Pasaron ${aniosHumanos} años desde el ${fecha.getFullYear()}.`
      )
    : console.info(`Estamos en el año actual ${fecha.getFullYear()}.`);
};

//calcularAnios();
//calcularAnios("1980");
//calcularAnios(new Date())
//calcularAnios(new Date(1981,4,13))
//calcularAnios(new Date(2081,4,13))
//calcularAnios(new Date(1492,9,13))

//Ejercicio 18 --------------
//Programa una función que dada una cadena de texto cuente el número de vocales y consonantes, pe. miFuncion("Hola Mundo") devuelva Vocales: 4, Consonantes: 5.

const contarLetras = (cadena = "") => {
  if (!cadena) return console.warn("No ingresó cadena de texto");

  if (typeof cadena !== "string")
    return console.error(
      `El valor "${cadena}" ingresado, No es una cadena de texto`
    );

  let vocales = 0,
    consonantes = 0;

  cadena = cadena.toLocaleLowerCase();

  for (let letra of cadena) {
    if (/[aeiouáéíóúü]/.test(letra)) vocales++;
    if (/[bcdfghjklmnñpqrstvwxyz]/.test(letra)) consonantes++;
  }

  return console.info({
    cadena,
    vocales,
    consonantes,
  });
};

//contarLetras();
//contarLetras(34);
//contarLetras("el valor ingresado de esta cadena");

//Ejercicio 19 --------------
//Programa una función que valide que un texto sea un nombre válido, pe. miFuncion("Jonathan MirCha") devolverá verdadero.

const validarNombre = (nombre = "") => {
  if (!nombre) return console.warn("No ingresó su nombre");

  if (typeof nombre !== "string")
    return console.error(
      `Lo ingresado: "${nombre}", No es una cadena de texto`
    );
  let expReg = /^[A-Za-zÑñáéíóúÁÉÍÓÚüÜ'`´\s]+$/g.test(nombre);
  return expReg
    ? console.info(`"${nombre}": es un nombre válido`)
    : console.info(`"${nombre}": No es un nombre válido`);
};

//validarNombre();
//validarNombre(2);
//validarNombre("Sergio Ortega");
//validarNombre("sergio ortega d'intinto D´ Intinto ");

//Ejercicio 20 --------------
//Programa una función que valide que un texto sea un email válido, pe. miFuncion("jonmircha@gmail.com") devolverá verdadero.

const validarMail = (mail = "") => {
  if (!mail) return console.warn("No ingresó su mail");
  if (typeof mail !== "string")
    return console.error(`Lo ingresado: "${mail}", No es una cadena de texto`);
  let expReg =
    /[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/i.test(
      mail
    );

  return expReg
    ? console.info(`"${mail}": es un mail válido`)
    : console.warn(`"${mail}": No es un mail válido`);
};

//validarMail();
//validarMail(4);
//validarMail("ho-5.la@go5-ogle.com");
//validarMail("h,o-5.la@go5-ogle.com");

//Ejercicio 20  bonus------
//Fusion de los dos anteriores-------

const validarNyM = (texto = "", patron = undefined) => {
  if (!texto) return console.warn("No ingresó su texto a evaluar");
  if (typeof texto !== "string")
    return console.error(`Lo ingresado: "${texto}", No es una cadena de texto`);
  if (patron === undefined) return console.warn("No ingresó el Patrón");
  if (!patron instanceof RegExp)
    return console.error(
      `Lo ingresado: "${patron}", No es una expresion regular`
    );

  let expReg = patron.test(texto);

  return expReg
    ? console.info(`"${texto}": cumple con el patrón ingresado.`)
    : console.warn(`"${texto}": No cumple con el patrón.`);
};

/* validarNyM();
validarNyM("carlos");
validarNyM("calos", /^[A-Za-zÑñáéíóúÁÉÍÓÚüÜ'`´\s]+$/g);
validarNyM(
  "ho-la5.chau@google.com",
  /[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/i
);
validarNyM(
  "ho-la5.chau@google.com",
  /[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/i
); 
validarNyM("Carlos", /[a-z]/i);
*/

//Ejercicio 20  bonus 2 (el Mio, mejor que el de JonMircha)------
//Fusion de los dos anteriores-------

const validarNyM_Ser = (data = "", selector = undefined) => {
  if (!data) return console.warn("Ingrese nombre o mail completo.");
  if (typeof data !== "string")
    return console.warn(
      `Lo ingresado: "${data}", No es valido, ingrese nombre o mail completo`
    );
  if (selector === undefined)
    return console.info(
      "Indique: \n1 - Para validar Nombre \n2 - Para validar Mail"
    );
  if (typeof selector !== "number")
    return console.warn(
      `El valor ${selector} ingresado, No es un número. \nIndique: \n1 - Para validar Nombre \n2 - Para validar Mail`
    );
  if (selector === 1) {
    let expReg = /^[A-Za-zÑñáéíóúÁÉÍÓÚüÜ'`´\s]+$/g.test(data);
    return expReg
      ? console.info(`"${data}": es un nombre válido`)
      : console.warn(`"${data}": No es un nombre válido`);
  } else if (selector === 2) {
    let expReg =
      /[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/i.test(
        data
      );
    return expReg
      ? console.info(`"${data}": es un mail válido`)
      : console.warn(`"${data}": No es un mail válido`);
  } else {
    console.error(
      "Solo se puede elegir entre: \n1 - Para validar Nombre \n2 - Para validar Mail"
    );
  }
};

/* 
validarNyM_Ser();
validarNyM_Ser(2);
validarNyM_Ser("Charly");
validarNyM_Ser("sam elote", 3);
validarNyM_Ser("Juan Carter", 1);
validarNyM_Ser("Juan4 Carter", 1);
validarNyM_Ser("Juan Ertet", 2);
validarNyM_Ser("JuanErtet@gmail.com", 2);
validarNyM_Ser("Juan.Ertet@gmail.com", 2);
validarNyM_Ser("Juan-Ertet@gmail.com", 2);
validarNyM_Ser("Juan.Ertet@gmail.com", 2);
validarNyM_Ser("Juan555Ertet@gmail.com", 2);
validarNyM_Ser("Juan_Ertet@gmail.com", 2);
validarNyM_Ser("JuanÑErtet@gmail.com", 2);
validarNyM_Ser("JuanErtet@gm ail.com", 2); 
*/

//Ejercicio 21 --------------
//Programa una función que dado un array numérico devuelve otro array con los números elevados al cuadrado, pe. mi_funcion([1, 4, 5]) devolverá [1, 16, 25].

const devolverCuadrado = (arr = undefined) => {
  if (arr === undefined) return console.warn("Ingresar arreglo de números.");
  if (!(arr instanceof Array))
    return console.error(`El valor ingresado no es un arreglo.`);
  if (arr.length === 0) return console.warn("El arreglo está vacío.");
  for (let num of arr) {
    if (typeof num !== "number")
      return console.warn(`El valor "${num}" ingresado no es un número. `);
  }
  /* const arrSalida = for (const iterator of arr) {
iterator * iterator
}
console.info(arrSalida) */
  const arrSalida = arr.map((el) => el * el);
  return console.info(
    `Arreglo Original: ${arr}\nArreglo elevado al cuadrado: ${arrSalida}`
  );
};
/* 
devolverCuadrado();
devolverCuadrado(1);
devolverCuadrado([]);
devolverCuadrado([[]]);
devolverCuadrado({});
devolverCuadrado([3]);
devolverCuadrado([3, 5, 7, 21]);
devolverCuadrado("tres");
devolverCuadrado(["tres"]);
devolverCuadrado(false);
 */

//Ejercicio 22 --------------
// Programa una función que dado un array devuelva el número mas alto y el más bajo de dicho array, pe. miFuncion([1, 4, 5, 99, -60]) devolverá [99, -60].

const arrayMinMax = (arr = undefined) => {
  if (arr === undefined) return console.warn("Ingresar arreglo de números.");
  if (!(arr instanceof Array))
    return console.error(`El valor ingresado no es un arreglo.`);
  if (arr.length === 0) return console.warn("El arreglo está vacío.");
  for (let num of arr) {
    if (typeof num !== "number")
      return console.warn(`El valor "${num}" ingresado no es un número. `);
  }
  return console.info(
    `Arreglo original: ${arr}\nValor mayor: ${Math.max(
      ...arr
    )},\nValor menor: ${Math.min(...arr)}`
  );
};
/* 
arrayMinMax();
arrayMinMax(false);
arrayMinMax([]);
arrayMinMax([1, true, "cero"]);
arrayMinMax([1, 5, 654, 1, -564, -999]);
 */

//Ejercicio 23 --------------
// Programa una función que dado un array de números devuelva un objeto con 2 arreglos en el primero almacena los números pares y en el segundo los impares, pe. miFuncion([1,2,3,4,5,6,7,8,9,0]) devolverá {pares: [2,4,6,8,0], impares: [1,3,5,7,9]}.

const parImpar = (arr = undefined) => {
  if (arr === undefined) return console.warn("Ingresar arreglo de números.");
  if (!(arr instanceof Array))
    return console.error(`El valor ingresado no es un arreglo.`);
  if (arr.length === 0) return console.warn("El arreglo está vacío.");
  for (let num of arr) {
    if (typeof num !== "number")
      return console.warn(`El valor "${num}" ingresado no es un número. `);
  }
  return console.info({
    pares: arr.filter((num) => num % 2 === 0),
    impares: arr.filter((num) => num % 2 === 1),
  });
};
/* 
parImpar();
parImpar("uno");
parImpar([]);
parImpar([1, 2, "tres"]);
parImpar([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);
 */

//Ejercicio 24 --------------
// Programa una función que dado un arreglo de números devuelva un objeto con dos arreglos, el primero tendrá los numeros ordenados en forma ascendente y el segundo de forma descendiente, pe. miFuncion([7, 5,7,8,6]) devolverá { asc: [5,6,7,7,8], desc: [8,7,7,6,5] }.

const ordenarArreglo = (arr = undefined) => {
  if (arr === undefined) return console.warn("Ingresar arreglo de números.");
  if (!(arr instanceof Array))
    return console.error(`El valor ingresado no es un arreglo.`);
  if (arr.length === 0) return console.warn("El arreglo está vacío.");
  for (let num of arr) {
    if (typeof num !== "number")
      return console.warn(`El valor "${num}" ingresado no es un número. `);
  }
  return console.info({
    arr,
    asc: arr.map((el) => el).sort(),
    desc: arr
      .map((el) => el)
      .sort()
      .reverse(),
  });
};

/* ordenarArreglo();
ordenarArreglo("uno");
ordenarArreglo([]);
ordenarArreglo([1, true]);
ordenarArreglo([1, 2, 3, 78, 9, 4, 6, 7, 646, 4, 6, 6]); */

//Ejercicio 25 --------------
// Programa una función que dado un arreglo de elementos, elimine los duplicados, pe. miFuncion(["x", 10, "x", 2, "10", 10, true, true]) devolverá ["x", 10, 2, "10", true].

const quitarDuplicados = (arr = undefined) => {
  if (arr === undefined) return console.warn("Ingresar arreglo de números.");
  if (!(arr instanceof Array))
    return console.error(`El valor ingresado no es un arreglo.`);
  if (arr.length === 0) return console.warn("El arreglo está vacío.");
  if (arr.length < 2)
    return console.warn("Necesitas agregar más elementos en tu arreglo");
  /* return console.info({
    original: arr,
    sinDuplicados: arr.filter(
      (value, index, self) => self.indexOf(value) === index
    ),
  }); */

  return console.info({
    original: arr,
    sinDuplicados: [...new Set(arr)],
  });
};

//quitarDuplicados([true, 3, 7, "hola", 3, 25, 4, 44, 4, 4, true, "4"]);

//Ejercicio 26 --------------
// Programa una función que dado un arreglo de números obtenga el promedio, pe. promedio([9,8,7,6,5,4,3,2,1,0]) devolverá 4.5.

//Solución previa a ECMASCRIPT 6
/*
const promedio = (arr = undefined) => {
  if (arr === undefined) return console.warn("Ingresar arreglo");
  if (!(arr instanceof Array))
    return console.error(
      `No es un arreglo\nUtilice corchetes [] y comas entre los números`
    );
  for (let num of arr) {
    if (typeof num !== "number")
      return console.warn(`El valor "${num}" no es un número`);
  }
  if (arr.length === 0) return console.warn("El arreglo está vacío");
  if (arr.length < 2) return console.warn("Se necesitan al menos 2 valores");
  let sumar = 0;
  for (const num of arr) {
    sumar += num;
  }
  let promedi = (sumar / arr.length).toFixed(2);
  return console.info(promedi);
};

promedio();
promedio([]);
promedio([true]);
promedio(10);
promedio([60, 60, 80]); */

//Solucion posterior a ECMASCRIPT 6

const promedio = (arr = undefined) => {
  if (arr === undefined) return console.warn("Ingresar arreglo");
  if (!(arr instanceof Array))
    return console.error(
      `No es un arreglo\nUtilice corchetes [] y comas entre los números`
    );
  for (let num of arr) {
    if (typeof num !== "number")
      return console.warn(`El valor "${num}" no es un número`);
  }
  if (arr.length === 0) return console.warn("El arreglo está vacío");
  if (arr.length < 2) return console.warn("Se necesitan al menos 2 valores");

  return console.info(
    arr.reduce((total, num, index, arr) => {
      total += num;
      if (index === arr.length - 1) {
        return `El promedio de ${arr.join(" + ")} es ${(
          total / arr.length
        ).toFixed(2)}`;
      } else {
        return total;
      }
    })
  );
};

/* 
promedio();
promedio(true);
promedio(10);
promedio([10]);
promedio([10, 4, 5, 4, 6, 4, 7, 6, 124]);
 */

//Ejercicio 27 --------------
/*  Programa una clase llamada Pelicula.
La clase recibirá un objeto al momento de instanciarse con los siguentes datos: id de la película en IMDB, titulo, director, año de estreno, país o países de origen, géneros y calificación en IMBD.
  - Todos los datos del objeto son obligatorios.
  - Valida que el id IMDB tenga 9 caracteres, los primeros 2 sean letras y los 7 restantes números.
  - Valida que el título no rebase los 100 caracteres.
  - Valida que el director no rebase los 50 caracteres.
  - Valida que el año de estreno sea un número entero de 4 dígitos.
  - Valida que el país o paises sea introducidos en forma de arreglo.
  - Valida que los géneros sean introducidos en forma de arreglo.
  - Valida que los géneros introducidos esten dentro de los géneros 
     aceptados*.
  - Crea un método estático que devuelva los géneros aceptados*.
  - Valida que la calificación sea un número entre 0 y 10 pudiendo ser 
    decimal de una posición.
  - Crea un método que devuelva toda la ficha técnica de la película.
  - Apartir de un arreglo con la información de 3 películas genera 3 
    instancias de la clase de forma automatizada e imprime la ficha técnica de cada película.

* Géneros Aceptados: Action, Adult, Adventure, Animation, Biography, Comedy, Crime, Documentary ,Drama, Family, Fantasy, Film Noir, Game-Show, History, Horror, Musical, Music, Mystery, News, Reality-TV, Romance, Sci-Fi, Short, Sport, Talk-Show, Thriller, War, Western. */

class Pelicula {
  constructor({ id, titulo, director, estreno, pais, generos, calificacion }) {
    this.id = id;
    this.titulo = titulo;
    this.director = director;
    this.estreno = estreno;
    this.pais = pais;
    this.generos = generos;
    this.calificacion = calificacion;

    this.validarIMDB(id);
    this.validarTitulo(titulo);
    this.validarDirector(director);
    this.validarEstreno(estreno);
    this.validarPais(pais);
    this.validarGeneros(generos);
    this.validarCalificacion(calificacion);
  }

  static get listaGeneros() {
    return [
      "Action",
      "Adult",
      "Adventure",
      "Animation",
      "Biography",
      "Comedy",
      "Crime",
      "Documentary",
      "Drama",
      "Family",
      "Fantasy",
      "Film Noir",
      "Game-Show",
      "History",
      "Horror",
      "Musical",
      "Music",
      "Mystery",
      "News",
      "Reality-TV",
      "Romance",
      "Sci-Fi",
      "Short",
      "Sport",
      "Talk-Show",
      "Thriller",
      "War",
      "Western",
    ];
  }

  static generosAceptados() {
    return console.info(
      `Los ${
        Pelicula.listaGeneros.length
      } géneros aceptados son:\n + ${Pelicula.listaGeneros.join("\n + ")}`
    );
  }

  validarCadena(propiedad, valor) {
    if (!valor) return console.warn(`${propiedad} "${valor}" está vacío`);
    if (typeof valor !== "string")
      return console.error(
        `${propiedad} "${valor}" ingresado, No es una cadena de texto`
      );
    return true;
  }

  validarLongitudCadena(propiedad, valor, longitud) {
    if (valor.length > longitud)
      return console.error(
        `${propiedad} "${valor}" excede el número de caracteres permitidos, el máximo es: (${longitud}).`
      );
    return true;
  }

  validarIMDB(id) {
    if (this.validarCadena("IMDB id", id))
      if (!/^([a-z]){2}([0-9]){7}$/.test(id))
        return console.error(
          `IMDB id "${id}" No es válido, debe iniciar con:\n2 letras minúsculas y seguir con 7 números.`
        );
  }

  validarTitulo(titulo) {
    if (this.validarCadena("Título", titulo))
      this.validarLongitudCadena("Título", titulo, 100);
  }
  validarDirector(director) {
    if (this.validarCadena("Director", director))
      this.validarLongitudCadena("Director", director, 50);
  }

  validarNumero(propiedad, valor) {
    if (!valor) return console.warn(`${propiedad} "${valor}" esta vacío.`);

    if (typeof valor !== "number")
      return console.warn(
        `na na na... ${propiedad} "${valor}" ingresado, No es un númerijillo`
      );
    return true;
  }
  validarEstreno(estreno) {
    if (this.validarNumero("Año de estreno", estreno))
      if (!/^([0-9]){4}$/.test(estreno))
        return console.error(
          `Año de estreno "${estreno}" No es válido,\n debemos poner el año completo,\no sea un número de 4 dígitos.`
        );
  }

  validarArreglo(propiedad, valor) {
    if (!valor) return console.warn(`${propiedad} "${valor}" esta vacío.`);
    if (!(valor instanceof Array))
      return console.error(
        `No es un arreglo\nUtilice corchetes [] y comas entre los datos ingresados.`
      );
    if (valor.length === 0)
      return console.warn(
        `vaaaamos... ${propiedad} "${valor}" no tiene ningún datirilijillo.`
      );

    for (let cadena of valor) {
      if (typeof cadena !== "string")
        return console.warn(`El valor "${cadena}" debe ser cadena de texto`);
      if (!cadena)
        return console.warn(
          `Sergio dice: insisto que debe ingresar algún dato en ${propiedad}`
        );
    }
    return true;
  }
  validarPais(pais) {
    this.validarArreglo("País", pais);
  }

  validarGeneros(generos) {
    if (this.validarArreglo("Géneros", generos)) {
      for (let genero of generos) {
        //console.log(genero, Pelicula.listaGeneros.includes(genero));
        if (!Pelicula.listaGeneros.includes(genero)) {
          console.warn(
            `Revise: algunos de estos géneros son incorrectos "${generos.join(
              ", "
            )}" `
          );
          Pelicula.generosAceptados();
        }
      }
    }
  }

  validarCalificacion(calificacion) {
    if (this.validarNumero("Calificación", calificacion))
      return calificacion < 0 || calificacion > 10
        ? console.warn(`Calificación debe ser de 0 a 10, con un decimal`)
        : (this.calificacion = calificacion.toFixed(1));
  }

  fichaTecnica() {
    console.info(
      `Ficha Técnica:\n--------------\nTítulo: "${this.titulo}"\nDirector: "${
        this.director
      }"\nAño: "${this.estreno}"\nPaís: "${this.pais.join(
        " - "
      )}"\nGénero/s: "${this.generos.join(", ")}"\nCalificación: "${
        this.calificacion
      }"\nIMDB Id: "${this.id}"`
    );
  }
}

//Pelicula.generosAceptados();
/* const peli = new Pelicula({
  id: "tt0088763",
  titulo: "Back to the Future",
  director: "Robert Zemeckis",
  estreno: 1985,
  pais: ["USA"],
  generos: ["Comedy", "Action"],
  calificacion: 8.46479,
});

peli.fichaTecnica();
 */

const misPelis = [
  {
    id: "tt0088763",
    titulo: "Back to the Future",
    director: "Robert Zemeckis",
    estreno: 1985,
    pais: ["USA"],
    generos: ["Comedy", "Action"],
    calificacion: 8.46479,
  },
  {
    id: "tt0112641",
    titulo: "Casino",
    director: "Martin Scorsese",
    estreno: 1995,
    pais: ["USA"],
    generos: ["Drama"],
    calificacion: 8.2,
  },
  {
    id: "tt0208092",
    titulo: "Snatch",
    director: "Guy Ritchie",
    estreno: 2000,
    pais: ["UK"],
    generos: ["Action"],
    calificacion: 8.3,
  },
];

misPelis.forEach((el) => new Pelicula(el).fichaTecnica());
