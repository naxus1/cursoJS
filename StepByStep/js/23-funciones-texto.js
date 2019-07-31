'use strict'

// +++++++++++++++++++++++++++++++++++++++++++++ Text transform
var numero = 444;
var texto = "Bienvenido al curso de JS - curso";
var texto2 = "Oscar Vargas";

// var dato = numero.toString();
// console.log(texto.toLowerCase());
// console.log(texto2.toUpperCase());

// //Long
// var nombre = "Juan pedro fabian";
// console.log(nombre.length);

// var arr = ["Hola", "dd", "Pedro"];
// console.log(arr.length);

// //Concat
// var texto_total = texto.concat(" " + texto2);
// var texto_total2 = texto + " " + texto2;

// console.log(texto_total);
// console.log(texto_total2);


//++++++++++++++++++++++++++++++++++++++++++++++++++ Busqueda

//Show the position where the first ocurrence found
var busqueda = texto.indexOf("curso");
console.log(busqueda);

//Show the position where the last ocurrence
var busqueda2 = texto.lastIndexOf("curso");
console.log(busqueda2);

//Show array with the list found
var busqueda3 = texto.match("curso");
console.log(busqueda3);

var busqueda4 = texto.substring(14, 19);
console.log(busqueda4);


var busqueda5 = texto.startsWith("Bienve");
console.log(busqueda5);

var busqueda6 = texto.includes("rso");
console.log(busqueda6);

// ++++++++++++++++++++++++++++++++++++++++++++++++++ Replace