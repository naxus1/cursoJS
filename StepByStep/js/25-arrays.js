'use strict'

// Arrays

// create
var nombres = ["Oscir vargis", "Jurn Murcoa", "Pedro Pablo"];
var lenguajes = new Array("Go", "JS", "Python", "C", "C#", "Pascal");

// show Elements
console.log(nombres);
console.log(lenguajes);

//Show element
console.log(nombres[1]);

//Lenght array
console.log(nombres.length);

//Get element
var elemento = parseInt(prompt("Que elemento requiere", 0));
if (elemento > nombres.length - 1)
    alert("No existe elemento, intorduce un numero menor que " + nombres.length);
else
    alert(nombres[elemento]);

//Show in the page elements of my array
document.write("<h1>The programming lenguages for 2019 are:</h1>");
document.write("<ul>");
    // for(let i = 0; i < lenguajes.length; i++)
    // {
    //     document.write("<li>" + lenguajes[i] + "</li>");
    // }

    lenguajes.forEach((elemento, indice) => {
        document.write("<li>" + indice +"-" + elemento + "</li>");
    });
document.write("</ul>");

