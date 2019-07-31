'use_strict'

// Programa que pide 2 numeros y nos dice cual es mayor el menor o si son iguales
// If umber is not a number or the number is less than 0, input again.

var number1 = parseInt(prompt("Digite numero 1", 0));
var number2 = parseInt(prompt("Dogite numero 2", 0));

while (number1 < 0 || number2 < 0 ||isNaN(number1) || isNaN(number2))
{
number1 = parseInt(prompt("Digite numero 1", 0));
number2 = parseInt(prompt("Digite numero 2", 0));
}

if (number1 === number2) 
{
    alert("Los numeros son iguales");
}
else if(number1 > number2)
{
    alert("el numero mayor es:" + number1);
    alert("el numero menor es:" + number2);
}
else if(number1 < number2)
{
    alert("el numero mayor es:" + number2);
    alert("el numero menor es:" + number1);
}

