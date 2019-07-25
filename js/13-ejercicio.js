'use strict'

// create program that show all num between 2 numbers that the user enter.

var num1 = parseInt(prompt("Ingrese numero 1"), 0);
var num2 = parseInt(prompt("Ingrese Numero 2"), 0);

while (isNaN(num1) || isNaN(num2))
{
    var num1 = parseInt(prompt("Ingrese numero 1"), 0);
    var num2 = parseInt(prompt("Ingrese Numero 2"), 0);
}
document.write("<h2> De" + num1 + "a" + num2 + "</h2>");
for (var i = num1; i <= num2; i++)
{
       document.write(i + "<br>");
}

