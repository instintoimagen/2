import saludar, { PI, usuario } from "./constantes.js";
import { aritmetica as calc } from "./aritmetica.js";

console.log("Archivo modulos.JS");
console.log(PI);
console.log(usuario);

console.log(calc.restar(12, 4));

saludar();

console.log("-----Video 34 - Ejercicio 1------");
//Programa una función que cuente el número de caracteres de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá 10.

/* function contarCaracteres(cadena = "") {
  if (!cadena) {
    console.warn("no ingresaste ninguna cadena");
  } else {
    console.info(`La cadena "${cadena}" tiene "${cadena.length}"`);
  }
} */

const contarCaracteres = (cadena = "") =>
  !cadena
    ? console.warn("no ingresaste ninguna cadena")
    : console.info(`La cadena "${cadena}" tiene ${cadena.length}`);

contarCaracteres("Holisss");

console.log("-----Ejercicio 2------");
//Programa una función que te devuelva el texto recortado según el número de caracteres indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola".

const recortarTex = (cadena = "", longitud = undefined) =>
  !cadena
    ? console.warn("Ingresar texto en funcion")
    : longitud === undefined
    ? console.warn("Indicar longitud")
    : console.info(cadena.slice(0, longitud));

recortarTex("", 4);
recortarTex("hola mundirijillo");
recortarTex("Holassss mundos posibles", 20);

console.log("-----Ejercicio 3------");
//Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].

const recortar = (cadena = "", separador = undefined) =>
  !cadena
    ? console.warn("Ingresar cadena")
    : separador === undefined
    ? console.warn("Indicar separador")
    : console.info(cadena.split(separador));

recortar("");
recortar("Hola mi amor que tal");
recortar("hola mi amor que tal", "a");

console.log("-----Ejercicio 4------");
// Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo.

const repeat = (cadena = "", cantRep = undefined) => {
  if (!cadena) return console.warn("Ingresar cadena");
  if (cantRep === undefined)
    return console.warn("Indicar numero de repeticiones");

  if (cantRep === 0)
    return console.error("la cantidad de repeticiones no puede ser cero");

  if (Math.sign(cantRep) === -1)
    return console.error("la cantidad de repeticiones no puede ser negativa");

  for (let index = 1; index <= cantRep; index++)
    console.info(`${cadena}, se imprime ${index} veces`);
};

repeat("");
repeat("Hola mi mundo");
repeat("Hola mi mundo", 0);
repeat("Hola mi mundo", -4);
repeat("Hola mi mundo", 3);
