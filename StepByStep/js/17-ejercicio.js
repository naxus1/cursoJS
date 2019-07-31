'use strict'

// Multiplication table of number enter

var number1 = parseInt(prompt("Enter a number: ", 0));

while (isNaN(number1))
{
    number1 = parseInt(prompt("Enter a number: ", 0));
}

document.write("<h1>Tabla del " + number1 + "</h1> <br/>");
for (var i = 1; i <= 10; i++)
{
    document.write(number1 + " x " + i + " = " + i*number1 + "<br>");
}