'use strict'

//The anonymous function is an unnamed function
// var pelicula = function(nombre){
//     return("El nombre de la peli es" + nombre);
// }

//Callback: this is a function within another function
function sumame(num1, num2, sumaYmuestra, funtXdos)
{
    var sumr = num1 + num2;
    sumaYmuestra(sumr);
    funtXdos(sumr);
    return sumr;

}


sumame(5, 7, (sumr) => {
    console.log("La suma es:", sumr)
},
function(sumr){
    console.log("La suma * 2 es ", sumr * 2);    
});


