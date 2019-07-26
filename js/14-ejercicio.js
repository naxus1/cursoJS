'use strict'

// Show all number even between 2 numbers that te user enter

var num1 = parseInt(prompt("Ingrese numero 1"), 0);
var num2 = parseInt(prompt("Ingrese Numero 2"), 0);

if(isNaN(num1) || isNaN(num2))
{
    num1 = 0;
    num2 = 0;
}

while(num1 < num2)
{
    if(num1 % 2 != 0)
    {
        console.log("El" + num1 + "Es impar");
    }
    num1++;    
}