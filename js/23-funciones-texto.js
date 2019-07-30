'use strict'

//Text transform
var numero = 444;
var texto = "Biernvenido al curso de JS";
var texto2 = "Oscar Vargas";

var dato = numero.toString();
console.log(texto.toLowerCase());
console.log(texto2.toUpperCase());

//Long
var nombre = "Juan pedro fabian";
console.log(nombre.length);

var arr = ["Hola", "dd", "Pedro"];
console.log(arr.length);

//Concat
var texto_total = texto.concat(" " + texto2);
var texto_total2 = texto + " " + texto2;

console.log(texto_total);
console.log(texto_total2);